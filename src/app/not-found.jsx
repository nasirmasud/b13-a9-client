"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FiAlertCircle, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 px-4 transition-colors duration-200">
      <div className="text-center space-y-6 max-w-md w-full">

        {/* 🚨 Icon / Visual Section */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center w-24 h-24 bg-indigo-50 dark:bg-indigo-950/30 rounded-full animate-bounce">
            <FiAlertCircle className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        {/* 🛑 Error Text */}
        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
            Page Not Found
          </h2>
          <p className="text-base text-gray-500 dark:text-zinc-400 font-normal">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* 🏠 Action Button */}
        <div className="pt-4">
          <Link href={'/'}>
            <Button
              className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <FiHome className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}