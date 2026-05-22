import { auth } from "@/lib/auth";
import { createPageMetadata, PAGE_TITLES } from "@/lib/site-metadata";

export const metadata = createPageMetadata(PAGE_TITLES.myTutors);
import { ArrowRight, Inbox, Mail } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import MyTutorsList from "../components/MyTutorsList";


export default async function MyTutorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
  const allTutors = await res.json();
  const myTutors = allTutors.filter((tutor) => tutor.email === user?.email);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-zinc-800 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              My Created Tutors
            </h1>
            <p className="text-sm text-gray-500 dark:text-zinc-400 font-normal flex items-center gap-1.5 mt-0.5">
              <Mail className="w-3.5 h-3.5" /> {user?.email}
            </p>
          </div>
          <div className="px-6 py-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-center">Total Added</p>
            <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400 text-center mt-0.5">{myTutors.length}</p>
          </div>
        </div>

        {/* Main */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 pb-4">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Manage Your Tutor Profiles
            </h2>
            <Link href="/add-tutors" className="text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all shadow-sm">
              + Add New Tutor
            </Link>
          </div>

          {myTutors.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-zinc-800/80 p-12 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-4">
                <Inbox className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white">No Tutors Created Yet!</h3>
              <p className="text-sm text-gray-400 dark:text-zinc-500 max-w-sm mt-1.5 leading-relaxed">
                You haven&apos;t added any tutor listings yet.
              </p>
              <Link href="/add-tutors" className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition-all shadow-md group">
                Create First Listing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ) : (
            <MyTutorsList initialTutors={myTutors} />
          )}
        </div>
      </div>
    </div>
  );
}