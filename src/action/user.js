//src/action/user.js

"use server";

import connectDB from "@/lib/db";

const register = async (formData) => {
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");

  if(!firstName || !lastName || !email || !password){
    throw new Error("Please fill all fields")
  }

  await connectDB();

  const existingUser = await User.findOne({email})
  if(existingUser) throw new Error("User already exists")
  
};

export default register;
