import { Input } from "@heroui/react";
import {
  FiSearch
} from "react-icons/fi";
import TutorCard from "../components/TutorCard";

const TutorsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
  const tutors = await res.json();

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-200">

      {/* Top Hero Heading Section */}
      <div className="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-[#1e1b4b] dark:text-zinc-100">
          Find Your Perfect Expert Tutor
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book expert tutors, attend live sessions, and achieve your academic goals with MediQueue.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pb-16 space-y-10">

        {/* Search & Filter Bar Section */}
        <div className="w-full bg-[#1e1b4b] dark:bg-zinc-900 p-4 rounded-lg shadow-md flex flex-col lg:flex-row gap-4 items-center">
          {/* Main Search Input */}
          <div className="w-full lg:flex-1 relative flex items-center">
            <FiSearch className="absolute left-4 text-gray-400 text-lg z-10 pointer-events-none" />
            <Input
              placeholder="Type tutor name, subject, or university..."
              className="w-full bg-white dark:bg-zinc-800 rounded-full pl-11 pr-4 py-2 border-none outline-none text-sm text-gray-900 dark:text-zinc-100 placeholder-gray-400"
            />
          </div>

          {/* Filters Grid */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex gap-3">
            <select className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option>by Subject</option>
              <option>Anatomy</option>
              <option>Physiology</option>
              <option>Biochemistry</option>
            </select>

            <select className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option>by City</option>
              <option>Chittagong</option>
              <option>Dhaka</option>
              <option>Sylhet</option>
            </select>

            <select className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option>by Price</option>
              <option>0 - 500 BDT</option>
              <option>500 - 1000 BDT</option>
            </select>

            <select className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option>by Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        {/* Tutors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tutors?.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>




      </div>
    </div>
  );
};

export default TutorsPage;