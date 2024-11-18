import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  image: { type: String },
  authProvideId: { type: String },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;
