import BookingModal from "@/app/components/BookingModal";
import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';
import {
  FiArrowLeft,
  FiAward,
  FiBookOpen, FiBriefcase, FiCalendar,
  FiCheckCircle, FiClock,
  FiDollarSign,
  FiLayers,
  FiMapPin,
  FiMonitor, FiUser
} from "react-icons/fi";


const TutorDetailsPage = async ({ params }) => {
  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`)
  const tutorData = await res.json()

  const { _id, tutorName, subject, image, availability, hourlyFee, totalSlot, startDate, teachingMode, district, address, institution, experienceYears } = tutorData

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-200">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 py-6">
        <Link href="/tutors" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition">
          <FiArrowLeft /> Back to all tutors
        </Link>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Details (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Header Profile Section */}
            <Card className="p-8 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="relative">
                  <Image
                    src={image}
                    alt={tutorName}
                    className="w-40 h-40 rounded-full object-cover ring-4 ring-indigo-50 dark:ring-indigo-900/20"
                    width={160}
                    height={160}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-4 border-white dark:border-zinc-900">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Chip size="sm" variant="flat" color="secondary" className="font-bold uppercase tracking-wider text-[10px]">
                      Verified Mentor
                    </Chip>
                    <Chip size="sm" variant="flat" color="success" className="font-bold uppercase tracking-wider text-[10px]">
                      Live Session
                    </Chip>
                  </div>

                  <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                    {tutorName}
                  </h1>

                  <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400 flex items-center justify-center md:justify-start gap-2">
                    <FiBookOpen /> {subject} Specialist
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-zinc-500 dark:text-zinc-400 pt-2">
                    <span className="flex items-center gap-1.5"><FiBriefcase className="text-indigo-500" /> {institution}</span>
                    <span className="flex items-center gap-1.5"><FiMapPin className="text-red-400" /> {district}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 text-center space-y-1 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl">
                <FiDollarSign className="mx-auto text-indigo-500 w-6 h-6" />
                <p className="text-xs text-zinc-500">Hourly Fee</p>
                <p className="font-bold text-lg">৳{hourlyFee}</p>
              </div>
              <div className="p-5 text-center space-y-1 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl">
                <FiAward className="mx-auto text-indigo-500 w-6 h-6" />
                <p className="text-xs text-zinc-500">Experience</p>
                <p className="font-bold text-lg">{experienceYears}+ Years</p>
              </div>
              <div className="p-5 text-center space-y-1 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl">
                <FiMonitor className="mx-auto text-indigo-500 w-6 h-6" />
                <p className="text-xs text-zinc-500">Teaching Mode</p>
                <p className="font-bold text-lg">{teachingMode}</p>
              </div>
              <div className="p-5 text-center space-y-1 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl">
                <FiLayers className="mx-auto text-indigo-500 w-6 h-6" />
                <p className="text-xs text-zinc-500">Available Slot</p>
                <p className="font-bold text-lg">{totalSlot} Slots</p>
              </div>
            </div>

            {/* About */}
            <Card className="p-8 border-2 border-indigo-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <FiUser className="text-indigo-500" /> About the Tutor
              </h2>
              <hr className="border-gray-100 dark:border-zinc-200" />
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg italic">
                Passionate about simplifying complex {subject} concepts for medical students. With {experienceYears} years of experience at {institution}, I focus on exam-oriented preparation and clinical correlations.
              </p>
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Education</p>
                  <p className="font-medium">{institution}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Address</p>
                  <p className="font-medium">{address}</p>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column: Sticky Booking Widget (4 Columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 space-y-6">
            <Card className="p-8 border-2 border-indigo-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-zinc-500 text-sm font-medium">Session Fee</span>
                  <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">৳{hourlyFee}<span className="text-sm font-normal text-zinc-400">/hr</span></p>
                </div>

                <hr className="border-gray-100 dark:border-zinc-200" />

                <div className="space-y-4">
                  <p className="font-bold text-zinc-800 dark:text-zinc-200">Session Details</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><FiClock /> Availability</span>
                      <span className="font-bold">{availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><FiCalendar /> Start Date</span>
                      <span className="font-bold">{startDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><FiLayers /> Slots Remaining</span>
                      <span className="font-bold text-red-500">{totalSlot} Slots</span>
                    </div>
                    <div className="pt-2 w-full">
                      <BookingModal tutorData={tutorData}
                      />
                    </div>

                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Safety Tips */}
            <div className="p-6 bg-indigo-50/50 dark:bg-zinc-900/50 border border-indigo-100 dark:border-zinc-800 rounded-3xl">
              <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <FiCheckCircle /> Verified Information
              </h4>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                This tutor has provided authentic identification and certificates. Your bookings are protected under MediQueue`&apos;`s refund policy.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TutorDetailsPage;
