"use server"
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import { IEmployeeCrud, EmployeeCrud } from "@/models/EmployeeCrud";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary';
import { uploadToCloudinary } from "@/app/ui/Cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

export async function POST(request: NextRequest){
    try {
        await connectDB();
        const data=await request.formData();
        const name=data.get("name") as string;
        const email=data.get("email") as string;
        const mobile=data.get("mobile") as string;
        const designation=data.get("designation") as string;
        const gender=data.get("gender") as string;
        const courses = data.getAll("courses") as string[];
        const image=data.get("image") as Blob | null;

        if(!name || !email || !mobile || !designation || !gender || !courses){
            return NextResponse.json({error: "Missing details"},{status: 400});
        }

        const userFound = await EmployeeCrud.findOne( {email} );
        if(userFound){
            return NextResponse.json({error:"User existed with same email"},{status: 400})
        }


        if (
            !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
            !process.env.CLOUDINARY_API_KEY ||
            !process.env.CLOUDINARY_API_SECRET
        ) {
            return NextResponse.json({ error: "Cloudinary credentials not found" }, { status: 500 });
        }
        let uploadedImageUrl = "";

        if (image) {
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            uploadedImageUrl = await uploadToCloudinary(buffer, "image");
        }

        const employee = new EmployeeCrud({
            Name: name,
            Email: email,
            Mobile_No: mobile,
            Designation: designation,
            Gender: gender,
            Courses: courses,
            Image: uploadedImageUrl || " ",
        })

        const savedUser = await employee.save()

        return NextResponse.json(
            {
                name: savedUser.Name,
                email: savedUser.Email,
                mobile: savedUser.Mobile_No,
                designation: savedUser.Designation,
                gender: savedUser.Designation,
                courses: savedUser.Courses,
                image: savedUser.Image,
                createdAt: savedUser.createdAt,
                updatedAt: savedUser.updatedAt,
            }
            ,
            {
                status: 201 
            }
        )
    } 
    catch (error) {
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

export async function GET(request: NextRequest){
    try {
        await connectDB();
        const emp = await EmployeeCrud.find({});
        const path=request.nextUrl.searchParams.get('path') || '/';
        revalidatePath(path);

        return NextResponse.json(emp, { status: 200 });
    }  catch (error) {
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

export async function DELETE(request: NextRequest) {
    try {
      await connectDB();
      const { searchParams } = new URL(request.url);
      const id = searchParams.get('id');      
      if (!id) {
        return NextResponse.json(
          { message: 'Missing ID' },
          { status: 400 }
        );
      }
      const result = await EmployeeCrud.findByIdAndDelete(id);
      console.log('Deleted Employee id', id);
      return NextResponse.json(
        { message: 'Employee deleted successfully' },
        { status: 200 }
      );
      
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return NextResponse.json(
          { message: error.message },
          { status: 400 }
        );
      } else {
        console.error('Error during deletion:', error);
        return NextResponse.error();
      }
    }
}

export async function PUT(request: NextRequest) {
    try {
      await connectDB();
      const pathname = request.nextUrl.pathname as string;  
      const segments = pathname.split('/');
      const id = segments.pop() || '';
  
      if (!id) {
        return NextResponse.json(
          { message: 'Missing ID' },
          { status: 400 }
        );
      }
      const data = await request.json();
      if (!data) {
        return NextResponse.json(
          { message: 'Missing data for update' },
          { status: 400 }
        );
      }
      const updatedEmployee = await EmployeeCrud.findByIdAndUpdate(id, data, {
        new: true, 
        runValidators: true
      });
  
      if (!updatedEmployee) {
        return NextResponse.json(
          { message: 'Employee not found' },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: 'Employee updated successfully', employee: updatedEmployee },
        { status: 200 }
      );
  
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return NextResponse.json(
          { message: error.message },
          { status: 400 }
        );
      } else {
        console.error('Error during update:', error);
        return NextResponse.error();
      }
    }
}