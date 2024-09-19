import React, { useState, useEffect } from 'react';

type Employee = {
  _id: string;
  Image: string;
  Name: string;
  Email: string;
  Mobile_No: string;
  Designation: string[];
  Gender: string;
  Courses: string[];
  createdAt: Date;
};

interface EditEmployeeProps {
  employee: Employee;
  onUpdate: (id: string, data: Partial<Employee>) => void;
  onClose: () => void;
}

const EditEmployee: React.FC<EditEmployeeProps> = ({ employee, onUpdate, onClose }) => {
  const [formData, setFormData] = useState<Partial<Employee>>({
    Name: employee.Name,
    Email: employee.Email,
    Mobile_No: employee.Mobile_No,
    Designation: employee.Designation,
    Gender: employee.Gender,
    Courses: employee.Courses
  });

  useEffect(() => {
    setFormData({
      Name: employee.Name,
      Email: employee.Email,
      Mobile_No: employee.Mobile_No,
      Designation: employee.Designation,
      Gender: employee.Gender,
      Courses: employee.Courses
    });
  }, [employee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(employee._id, formData);
    onClose();
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Mobile No:</label>
          <input
            type="text"
            name="Mobile_No"
            value={formData.Mobile_No || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Designation:</label>
          <input
            type="text"
            name="Designation"
            value={formData.Designation?.join(', ') || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, Designation: e.target.value.split(', ') }))}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Gender:</label>
          <select
            name="Gender"
            value={formData.Gender || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Courses:</label>
          <input
            type="text"
            name="Courses"
            value={formData.Courses?.join(', ') || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, Courses: e.target.value.split(', ') }))}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
