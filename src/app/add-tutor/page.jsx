"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Input, Label, ListBox, Select, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddTutorPage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    tutorData.email = session?.user?.email;
    tutorData.addedBy = session?.user?.name;

    const toastId = toast.loading("Adding tutor...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(tutorData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      toast.success("Tutor added successfully!", { id: toastId });
      router.push("/tutors");
    } catch (err) {
      toast.error(err.message || "Failed to add tutor", { id: toastId });
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-10 w-full max-w-[1440px] mx-auto min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-200">
      {/* Header section */}
      <div className="mb-8 px-2">
        <h1 className="text-3xl font-extrabold text-primary dark:text-indigo-400">
          Become a MediQueue Expert Tutor
        </h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
          Fill out the information below to create a professional tutor profile.
        </p>
      </div>

      <Card className="w-full border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl overflow-hidden mx-auto">
        <form onSubmit={onSubmit} className="p-6 sm:p-10 space-y-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">

            <div className="md:col-span-2">
              <TextField name="tutorName" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Tutor Full Name</Label>
                <Input placeholder="Enter Your Full Name" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <Select
                name="subject"
                isRequired
                className="w-full"
                placeholder="Select subject"
              >
                <Label className="text-gray-700 dark:text-zinc-300">Subject / Category</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-white dark:bg-zinc-900 border dark:border-zinc-800">
                  <ListBox className="text-gray-900 dark:text-zinc-100">
                    <ListBox.Item id="Anatomy" textValue="Anatomy">Anatomy<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Physiology" textValue="Physiology">Physiology<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Biochemistry" textValue="Biochemistry">Biochemistry<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Pathology" textValue="Pathology">Pathology<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="General Medicine" textValue="General Medicine">General Medicine<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div className="lg:col-span-2">
              <TextField name="image" type="url" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Profile Image URL</Label>
                <Input placeholder="Profile Image URL" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <TextField name="availability" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Availability (Days & Time)</Label>
                <Input placeholder="Sun - Thu, 5:00 PM" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <TextField name="hourlyFee" type="number" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Hourly Fee (BDT)</Label>
                <Input placeholder="500" min="0" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <TextField name="totalSlot" type="number" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Total Slots</Label>
                <Input placeholder="10" min="1" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <TextField name="startDate" type="date" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Session Start Date</Label>
                <Input className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <Select
                name="teachingMode"
                isRequired
                className="w-full"
                placeholder="Select mode"
              >
                <Label className="text-gray-700 dark:text-zinc-300">Teaching Mode</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-white dark:bg-zinc-900 border dark:border-zinc-800">
                  <ListBox className="text-gray-900 dark:text-zinc-100">
                    <ListBox.Item id="Online" textValue="Online">Online<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Offline" textValue="Offline">Offline<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Both" textValue="Both">Both<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <TextField name="district" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">District / City</Label>
                <Input placeholder="Your District or City Name" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="address" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Specific Area / Address</Label>
                <Input placeholder="Give Details Address" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="institution" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Institution</Label>
                <Input placeholder="Chittagong Medical College" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>

            <div>
              <TextField name="experienceYears" type="number" isRequired className="w-full">
                <Label className="text-gray-700 dark:text-zinc-300">Experience (Years)</Label>
                <Input placeholder="3" min="0" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100" />
                <FieldError className="text-danger" />
              </TextField>
            </div>
          </div>

          <div className="pt-4 w-full">
            <Button
              type="submit"
              className="rounded-full w-full bg-primary hover:bg-[#4338ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold shadow-md transition h-12 text-md flex items-center justify-center"
            >
              Add Tutor
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddTutorPage;