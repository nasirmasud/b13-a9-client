"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { Mail, User } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const getFallbackName = () => {
    if (user?.name) {
      return user.name.trim().charAt(0).toUpperCase();
    }
    return "M";
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="w-32 h-8 bg-gray-200 dark:bg-zinc-800 animate-pulse rounded-full" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-gray-600 dark:text-zinc-400 mb-4">
          Please sign in to view your profile.
        </p>
        <Link
          href="/sign-in"
          className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
          My Profile
        </h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8">
          Manage your MediQueue account information
        </p>

        <Card className="p-8 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-3xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Avatar className="w-24 h-24">
              <Avatar.Image
                alt={user.name || "User"}
                src={user.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback className="text-2xl">
                {getFallbackName()}
              </Avatar.Fallback>
            </Avatar>

            <div className="space-y-4 flex-1 w-full">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {user.name || "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-base font-medium text-gray-700 dark:text-zinc-300">
                    {user.email || "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
