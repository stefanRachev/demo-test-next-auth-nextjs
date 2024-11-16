import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import React from "react";

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-neutral-900">
      <h2 className="font-bold text-lg md:text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyShop
      </h2>
      <p className="text-sm md:text-base text-neutral-600 mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>
      <form className="my-8">
        <div className="flex flex-col space-y-4">
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="First Name"
              type="text"
              name="firstname"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Last Name"
              type="text"
              name="lastname"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@domain.com"
              type="email"
              name="email"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              name="password"
              className="w-full"
            />
          </div>
          <Button className="mt-4 w-full">Sign up &rarr;</Button>
          <p>Already have an account?{" "}<Link href="/login">Login</Link></p>

        </div>
      </form>
    </div>
  );
};

export default Register;
