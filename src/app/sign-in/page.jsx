"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      router.push("/");
    }

    if (error) {
      alert(error.message || "Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      alert("Google sign in failed. Please try again.");
    }
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-zinc-950 flex flex-col items-center justify-center py-12 sm:py-16 p-4 transition-colors duration-200">

      <Card className="w-full max-w-lg p-6 sm:p-10 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Sign in to your MediQueue account to continue
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">

          {/* Email Address Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Email Address</Label>
            <Input placeholder="Enter your email" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Password</Label>
              <Link href="/forgot-password" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input placeholder="••••••••" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <Button
              type="submit"
              className="rounded-full flex-1 bg-primary hover:bg-[#4338ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold h-12 text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Check className="w-4 h-4" />
              Sign In
            </Button>

            <Button
              type="reset"
              className="rounded-full flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 font-semibold h-12 text-sm flex items-center justify-center transition-all"
            >
              Reset
            </Button>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-gray-200 dark:border-zinc-200"></div>
            <span className="shrink mx-4 text-gray-400 text-xs">Or continue with</span>
            <div className="grow border-t border-gray-200 dark:border-zinc-200"></div>
          </div>

          <Button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-12 rounded-full border-2 border-indigo-600 dark:border-indigo-500 bg-transparent text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white font-bold text-sm flex items-center justify-center gap-3 transition-all group"
          >
            <FcGoogle className="w-4 h-4 transition-colors" />
            Sign in with Google
          </Button>

          {/* Redirect to Sign Up */}
          <p className="text-xs text-center text-gray-400 mt-2">
            Don`&apos;an account yet?{" "}
            <Link href="/sign-up" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Create an account
            </Link>
          </p>

        </Form>
      </Card>
    </div>
  );
};

export default SignInPage;