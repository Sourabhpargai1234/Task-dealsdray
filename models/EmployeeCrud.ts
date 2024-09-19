import mongoose, { Document, Schema } from "mongoose";

export interface IEmployeeCrud extends Document {
    Name: string;
    Email: string;
    Mobile_No: string;
    Designation: string[];
    Gender: string;
    Courses: string[];
    Image: string;
    createdAt: Date;
    updatedAt: Date;
}

const EmployeeCrudSchema = new Schema<IEmployeeCrud>(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Mobile_No: { type: String, required: true },
    Designation: { type: [String], required: true },
    Gender: { type: String, required: true },
    Courses: { type: [String], required: true },
    Image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const EmployeeCrud = mongoose.models.EmployeeCrud || mongoose.model<IEmployeeCrud>("EmployeeCrud", EmployeeCrudSchema);
