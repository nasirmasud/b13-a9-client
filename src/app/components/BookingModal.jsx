"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiCalendar, FiClock, FiDollarSign, FiX } from "react-icons/fi";

const BookingModal = ({ tutorData }) => {
  const { _id: tutorId, image, tutorName, hourlyFee, availability, startDate: tutorStartDate } = tutorData;

  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const defaultDateString = tutorStartDate || "2026-05-25";
  const [selectedDate, setSelectedDate] = useState(parseDate(defaultDateString));

  const handleConfirmBooking = async () => {
    if (!selectedDate) {
      toast.error("Select a valid date for booking.");
      return;
    }

    if (!user) {
      toast.error("Please log in first to book an appointment.");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      tutorId,
      image,
      tutorName,
      fee: hourlyFee,
      bookingDate: new Date(selectedDate),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutor-bookings`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        toast.success("Your appointment booking was successful!");
        setIsOpen(false);
      } else {
        toast.error("Booking failed, please try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Failed to connect to the server!");
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-full shadow-lg transition-all"
      >
        Book Appointment Now
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">

          <div className="light relative w-full max-w-md bg-white text-gray-900 border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="p-6 border-b border-gray-100 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Confirm Your Appointment</h3>
              <p className="text-xs text-gray-500 font-normal mt-1">Review details and pick your preferred date</p>
            </div>

            <div className="p-6 space-y-5 bg-white">
              <div className="p-4 bg-gray-50 rounded-2xl space-y-2.5 text-sm border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tutor Name:</span>
                  <span className="font-bold text-gray-900">{tutorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5"><FiClock /> Availability:</span>
                  <span className="font-semibold text-gray-700">{availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5"><FiDollarSign /> Hourly Fee:</span>
                  <span className="font-bold text-indigo-600">৳{hourlyFee}/hr</span>
                </div>
              </div>

              <div className="space-y-2 flex flex-col bg-white">
                <DateField
                  defaultValue={parseDate(defaultDateString)}
                  onChange={setSelectedDate}
                  className="w-full text-gray-900 light"
                  name="date"
                  variant="bordered"
                >
                  <Label className="text-sm font-bold text-gray-700 flex items-center gap-1.5 mb-1">
                    <FiCalendar className="text-indigo-500" /> Session Start Date
                  </Label>
                  <DateField.Group className="border border-gray-200 rounded-xl p-2 bg-white text-gray-900">
                    <DateField.Input>
                      {(segment) => (
                        <DateField.Segment
                          segment={segment}
                          className="text-gray-900 data-[placeholder=true]:text-gray-400 focus:bg-indigo-50 font-medium rounded"
                        />
                      )}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/80">
              <Button
                variant="flat"
                onClick={() => setIsOpen(false)}
                className="rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmBooking}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md px-6"
              >
                Confirm Booking
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;