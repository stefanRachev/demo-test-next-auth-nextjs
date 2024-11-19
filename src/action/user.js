//src/action/user.js

"use server";

import { signIn } from "@/auth";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Please provide both email and password");
  }

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl:"/",
      email,
      password,
    });

   
  } catch (error) {
    return error.message || "An unexpected error occurred.";
  }

  redirect("/")
};
export const register = async (formData) => {
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ firstName, lastName, email, password: hashedPassword });

  redirect("/login");
};


