import { User } from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { connectDB } from "@/libs/mongodb";


export async function POST(request: Request) {
  try {
    await connectDB();
    const formData = await request.formData();
    console.log(formData)
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;

    if(!name){
      return NextResponse.json({error: "Username is required"},{status: 400});
    }
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }
    const userFound = await User.findOne({ name });
    if (userFound) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username: name,
      password: hashedPassword
    });

    const savedUser = await user.save();

    return NextResponse.json(
      {
        name: savedUser.username,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    } else {
      console.error("Error during signup:", error);
      return NextResponse.error();
    }
  }
}