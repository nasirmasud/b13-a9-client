"use client";

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 px-4 transition-colors duration-200'>
      <div className='text-center space-y-4'>
        <div className='flex justify-center'>
          <Spinner size='lg' className='text-indigo-600 dark:text-indigo-400' />
        </div>

        <div className='space-y-1'>
          <h2 className='text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight animate-pulse'>
            Loading Content
          </h2>
          <p className='text-sm text-gray-500 dark:text-zinc-400 font-normal'>
            Please wait a moment while we set things up for you...
          </p>
        </div>
      </div>
    </div>
  );
}
