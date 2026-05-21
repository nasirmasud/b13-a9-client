"use client";


import { Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import TutorCard from "../components/TutorCard";
import { useDebounce } from "../hooks/useDebounce";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [mode, setMode] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (subject) params.set("subject", subject);
      if (city) params.set("city", city);
      if (price) params.set("price", price);
      if (mode) params.set("mode", mode);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?${params}`);
      const data = await res.json();
      setTutors(data);
      setLoading(false);
    };

    fetchTutors();
  }, [debouncedSearch, subject, city, price, mode]);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-200">

      <div className="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-[#1e1b4b] dark:text-zinc-100">
          Find Your Perfect Expert Tutor
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book expert tutors, attend live sessions, and achieve your academic goals with MediQueue.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pb-16 space-y-10">

        {/* Search & Filter Bar */}
        <div className="w-full bg-[#1e1b4b] dark:bg-zinc-900 p-4 rounded-lg shadow-md flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:flex-1 relative flex items-center">
            <FiSearch className="absolute left-4 text-gray-400 text-lg z-10 pointer-events-none" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type tutor name, subject, or institution..."
              className="w-full bg-white dark:bg-zinc-800 rounded-full pl-11 pr-4 py-2 border-none outline-none text-sm"
            />
          </div>

          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex gap-3">
            <select value={subject} onChange={(e) => setSubject(e.target.value)}
              className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option value="">by Subject</option>
              <option value="Anatomy">Anatomy</option>
              <option value="Physiology">Physiology</option>
              <option value="Biochemistry">Biochemistry</option>
            </select>

            <select value={city} onChange={(e) => setCity(e.target.value)}
              className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option value="">by City</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
            </select>

            <select value={price} onChange={(e) => setPrice(e.target.value)}
              className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option value="">by Price</option>
              <option value="0-500">0 - 500 BDT</option>
              <option value="500-1000">500 - 1000 BDT</option>
            </select>

            <select value={mode} onChange={(e) => setMode(e.target.value)}
              className="px-3 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm border-0 outline-none min-w-[120px] dark:text-zinc-200">
              <option value="">by Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading...</div>
        ) : tutors.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No tutors found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tutors.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default TutorsPage;