//User Schema and it's type

import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
}


// Interface for the User model
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
}, {
  timestamps: true,
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);