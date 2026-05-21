import { auth } from "@/lib/auth";
import { ArrowRight, Calendar, GraduationCap, Inbox, Mail, Settings, Star, Stethoscope } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function MyTutorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // সব tutor এনে email দিয়ে filter
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
  const allTutors = await res.json();
  const myTutors = allTutors.filter((tutor) => tutor.email === user?.email);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-zinc-800 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                My Created Tutors
              </h1>
              <p className="text-sm text-gray-500 dark:text-zinc-400 font-normal flex items-center gap-1.5 justify-center sm:justify-start mt-0.5">
                <Mail className="w-3.5 h-3.5" /> {user?.email}
              </p>
            </div>
          </div>

          <div className="px-6 py-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-center">
              Total Added
            </p>
            <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400 text-center mt-0.5">
              {myTutors.length}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Manage Your Tutor Profiles
            </h2>
            <Link
              href="/add-tutors"
              className="text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              + Add New Tutor
            </Link>
          </div>

          {myTutors.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-zinc-800/80 p-12 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                <Inbox className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                No Tutors Created Yet!
              </h3>
              <p className="text-sm text-gray-400 dark:text-zinc-500 max-w-sm mt-1.5 font-normal leading-relaxed">
                You haven&apos;t added any tutor listings. Create a professional profile to share your expertise.
              </p>
              <Link
                href="/add-tutors"
                className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition-all shadow-md group"
              >
                Create First Listing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {myTutors.map((tutor) => (
                <div
                  key={tutor._id}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-100 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >
                  <div className="flex items-center gap-4 min-w-[240px]">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                      {tutor.image ? (
                        <Image
                          src={tutor.image}
                          alt={tutor.tutorName}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        <Stethoscope className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {tutor.tutorName}
                      </h3>
                      <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        <GraduationCap className="w-3.5 h-3.5" /> {tutor.subject || "Medical Expert"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-zinc-400 font-normal sm:items-center">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Exp: <span className="font-medium text-gray-700 dark:text-zinc-300">{tutor.experienceYears || "2"}+ Years</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>Mode: <span className="text-gray-700 dark:text-zinc-300 font-bold">{tutor.teachingMode || "Online"}</span></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50 dark:border-zinc-800/60">
                    <div className="text-left sm:text-right">
                      <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Hourly Fee</p>
                      <p className="text-base font-black text-gray-900 dark:text-white flex items-baseline">
                        ৳{tutor.hourlyFee}<span className="text-[10px] font-medium text-gray-400 dark:text-zinc-500">/hr</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 text-xs font-bold border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3.5 py-2 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-zinc-700/60 shadow-sm">
                        <Settings className="w-3.5 h-3.5" /> Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}