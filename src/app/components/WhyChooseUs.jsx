"use client";

import { Award, Clock, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-t border-b-2 border-gray-100 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 w-fit">
              <Award className="w-3.5 h-3.5" /> Why MediQueue?
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight leading-tight">
              Premium Medical Mentorship, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Made Simple & Secure.
              </span>
            </h2>
            <p className="text-base text-gray-500 dark:text-zinc-400 font-normal leading-relaxed">
              MediQueue is built specifically to bridge the gap between medical aspirants and top-tier clinical experts. We enforce authentic identity verification and seamless workflows so you can focus entirely on learning.
            </p>

            {/* Features Bullet List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Strict Identity Verification</h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-normal">Tutors from top medical institutions (DMC, CMC, SSMC) are manually verified.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Real-Time Dynamic Slots</h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-normal">No overlapping appointment bookings. Schedules update dynamically instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid Column */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="p-6 bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-900 rounded-3xl text-center space-y-2">
              <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">50+</p>
              <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Verified Experts</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-900 rounded-3xl text-center space-y-2">
              <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">100%</p>
              <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Secure Sessions</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-900 rounded-3xl text-center space-y-2">
              <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">1.5k+</p>
              <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Sessions Mentored</p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-900 rounded-3xl text-center space-y-2">
              <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">24/7</p>
              <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Flexible Access</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}