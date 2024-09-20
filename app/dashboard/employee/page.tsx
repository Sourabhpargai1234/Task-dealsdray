"use client"
import React, { useState, useEffect } from 'react';
import { PlusCircleIcon } from '@heroicons/react/16/solid';
import DeleteEmployee from '@/app/ui/DeleteEmployee';

export default function EmployeePage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: [] as string[],
    image: null as File | null,
  });
  const [EmployeeDetails, setEmployeeDetails] = useState<any[]>([]);

  useEffect(()=>{
    const fetchEmployeeDetails = async() => {
      try {
        const response = await fetch("/api/auth/EmployeeApi");
        if(!response.ok) throw new Error("Failed to fetch employees");
        const data = await response.json();
        setEmployeeDetails(data);
      }
      catch (err) {
        console.log(err);
      }
    } ;
    fetchEmployeeDetails();
  },[])

  const [isOpen, setIsOpen] = useState(false);

  const createEmployee = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      courses: checked
        ? [...prevValues.courses, value]
        : prevValues.courses.filter(course => course !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);
    formData.append('mobile', formValues.mobile);
    formData.append('designation', formValues.designation);
    formData.append('gender', formValues.gender);
    formData.append('courses', JSON.stringify(formValues.courses)); 
    if (formValues.image) {
      formData.append('image', formValues.image);
    }

    // Post formData to API endpoint
    const response = await fetch('/api/auth/EmployeeApi', {
      method: 'POST',
      body: formData,
    });

    const data=response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.log("Some error caught on backend");
    }

    closeModal();
  };

  if (status === 'loading') {
    return <div className='text-5xl flex h-full justify-center items-center'>Loading...</div>;
  }

  const handleDelete = async (id: string) => {
    const success = await DeleteEmployee(id);
    if (success) {
      alert("Employee deleted successfully.");
    } else {
      alert("Failed to delete employee.");
    }
  };

  

  return (
    <>
      {status === 'authenticated' ? (
        <div>
          <h1 className="text-3xl">Employee Page</h1>
          <div className="flex float-right cursor-pointer" onClick={createEmployee}>
            <h1>Create Employee</h1>
            <PlusCircleIcon className="w-6 ml-2" />
          </div>

          {
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Id</th>
                  <th className="border border-gray-300 p-2">Image</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Mobile No</th>
                  <th className="border border-gray-300 p-2">Designation</th>
                  <th className="border border-gray-300 p-2">Gender</th>
                  <th className="border border-gray-300 p-2">Courses</th>
                  <th className="border border-gray-300 p-2">Created At</th>
                  <th className="border border-gray-300 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {EmployeeDetails.map((employee) => (
                  <tr key={employee._id}>
                    <td className="border border-gray-300 p-2">{employee._id.toString()}</td>
                    <td className="border border-gray-300 p-2 h-16 w-16">
                      <img src={employee.Image} className="w-16 h-16 object-cover" alt="User Image" />
                    </td>
                    <td className="border border-gray-300 p-2">{employee.Name}</td>
                    <td className="border border-gray-300 p-2">{employee.Email}</td>
                    <td className="border border-gray-300 p-2">{employee.Mobile_No}</td>
                    <td className="border border-gray-300 p-2">{employee.Designation.join(", ")}</td>
                    <td className="border border-gray-300 p-2">{employee.Gender}</td>
                    <td className="border border-gray-300 p-2">{employee.Courses}</td>
                    <td className="border border-gray-300 p-2">
                      {new Date(employee.createdAt).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 p-2 flex justify-center items-center h-[80px]">
                    <button className="bg-blue-500 text-white p-2 rounded mr-2">Edit</button>
                    <button 
                      onClick={() => handleDelete(employee._id)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Delete
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }

          {isOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Create New Employee</h2>

                <form onSubmit={handleSubmit}>
                  <label className="block mb-2">
                    Name:
                    <input
                      type="text"
                      name="name"
                      className="border w-full p-2 rounded mt-1"
                      value={formValues.name}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="block mb-2">
                    Email:
                    <input
                      type="email"
                      name="email"
                      className="border w-full p-2 rounded mt-1"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="block mb-2">
                    Mobile No:
                    <input
                      type="number"
                      name="mobile"
                      className="border w-full p-2 rounded mt-1"
                      value={formValues.mobile}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="block mb-2">
                    Designation:
                    <select
                      name="designation"
                      className="border w-full p-2 rounded mt-1"
                      value={formValues.designation}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select Designation
                      </option>
                      <option value="HR">HR</option>
                      <option value="Manager">Manager</option>
                      <option value="Sales">Sales</option>
                    </select>
                  </label>

                  <div className="mb-2">
                    <h3 className="mb-2">Gender:</h3>

                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="M"
                        checked={formValues.gender === 'M'}
                        onChange={handleInputChange}
                        className="form-radio"
                      />
                      <span className="ml-2">M</span>
                    </label>

                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="F"
                        checked={formValues.gender === 'F'}
                        onChange={handleInputChange}
                        className="form-radio"
                      />
                      <span className="ml-2">F</span>
                    </label>
                  </div>

                  <div className="mb-2">
                    <h3 className="mb-2">Course:</h3>

                    <label className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="course"
                        value="MCA"
                        onChange={handleCourseChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">MCA</span>
                    </label>

                    <label className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="course"
                        value="BCA"
                        onChange={handleCourseChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">BCA</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="course"
                        value="BSC"
                        onChange={handleCourseChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">BSC</span>
                    </label>
                  </div>

                  <label className="block mb-2">
                    Image:
                    <input
                      type="file"
                      className="border w-full p-2 rounded mt-1"
                      onChange={e =>
                        setFormValues(prevValues => ({
                          ...prevValues,
                          image: e.target.files ? e.target.files[0] : null,
                        }))
                      }
                    />
                  </label>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-3xl">Please sign in first</div>
      )}
    </>
  );
}
