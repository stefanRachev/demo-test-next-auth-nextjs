import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import React from "react";

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg:black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Please provide all the necessary information</p>
      <form>
        <div>
          <Label>First Name</Label>
          <Input
            id="firstname"
            placeholder="First Name"
            type="text"
            name="firstname"
          ></Input>
          <Label>Last Name</Label>
          <Input
            id="lastname"
            placeholder="Last Name"
            type="text"
            name="lastname"
          ></Input>
          <Label>Email</Label>
          <Input
            id="email"
            placeholder="example@domain.com"
            type="email"
            name="email"
          ></Input>
          <Label>Password</Label>
          <Input
            id="password"
            placeholder="********"
            type="password"
            name="password"
          ></Input>
          <Button className="mt-4">Sign up &rarr;</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
