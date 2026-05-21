"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      image: user.image,
      name: user.name,
      role: user.role
    });

    if (data) {
      router.push('/');
    }

    if (error) {
      alert(error?.message || "Something went wrong");
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
    <div className="w-full bg-gray-50 dark:bg-zinc-950 flex items-center justify-center py-8 sm:py-12 p-4 transition-colors duration-200">

      <Card className="w-full max-w-lg p-6 sm:p-10 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Create Account
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Join MediQueue to explore and book expert medical tutors
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">

          {/* Full Name Field */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Full Name</Label>
            <Input placeholder="Your Full Name" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField name="image" type="url" className="w-full">
            <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Profile Image URL</Label>
            <Input placeholder="https://example.com/your-photo.jpg" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

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
            <Input placeholder="Enter an Email" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Role Selection */}
          <div className="w-full flex flex-col gap-1.5">
            <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Register As</Label>
            <select
              name="role"
              required
              className="w-full h-10 px-3 rounded-2xl bg-gray-50 dark:bg-zinc-800 text-sm border-0 outline-none text-gray-900 dark:text-zinc-100 transition mt-1"
            >
              <option value="student">I am a Student</option>
              <option value="tutor">I am a Tutor</option>
            </select>
          </div>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Password</Label>
            <Input placeholder="••••••••" className="rounded-2xl bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 mt-1" />
            <Description className="text-[11px] text-gray-400 mt-1 leading-relaxed">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <Button
              type="submit"
              className="rounded-full flex-1 bg-[#4f46e5] hover:bg-[#4338ca] dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold h-12 text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Check className="w-4 h-4" />
              Sign Up
            </Button>

            <Button
              type="reset"
              className="rounded-full flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 font-semibold h-12 text-sm flex items-center justify-center transition-all"
            >
              Reset
            </Button>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-zinc-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">Or continue with</span>
            <div className="flex-grow border-t border-gray-200 dark:border-zinc-200"></div>
          </div>

          <Button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-12 rounded-full border-2 border-indigo-600 dark:border-indigo-500 bg-transparent text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white font-bold text-sm flex items-center justify-center gap-3 transition-all"
          >
            <FcGoogle className="w-4 h-4 transition-colors" />
            Sign up with Google
          </Button>

          <p className="text-xs text-center text-gray-400 mt-2">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Sign In
            </Link>
          </p>

        </Form>
      </Card>
    </div>
  );
}

export default SignUpPage;