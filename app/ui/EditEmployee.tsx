// components/EditEmployeeForm.tsx
import React, { useState, useEffect } from 'react';

interface Employee {
  _id: number;
  Name: string;
  Email: string;
  Mobile_No: string;
  Designation: string;
  Gender: string;
  Courses: string[];
  Image: string | null;
  createdAt: string;
}

interface EditEmployeeFormProps {
  employeeId: number;
  onClose: () => void;
}

const EditEmployee: React.FC<EditEmployeeFormProps> = ({ employeeId, onClose }) => {
  const [formValues, setFormValues] = useState<Employee>({
    _id: employeeId,
    Name: '',
    Email: '',
    Mobile_No: '',
    Designation: '',
    Gender: '',
    Courses: [],
    Image: null,
    createdAt: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`/api/auth/EmployeeApi/${employeeId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormValues(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      Courses: checked
        ? [...prev.Courses, value]
        : prev.Courses.filter((course) => course !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(formValues).forEach((key) => {
        formData.append(key, formValues[key as keyof Employee]);
      });

      const response = await fetch(`/api/auth/EmployeeApi/${employeeId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      onClose();
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="Name"
          className="border w-full p-2 rounded mt-1"
          value={formValues.Name}
          onChange={handleInputChange}
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="Email"
          className="border w-full p-2 rounded mt-1"
          value={formValues.Email}
          onChange={handleInputChange}
        />
      </label>

      <label className="block mb-2">
        Mobile No:
        <input
          type="text"
          name="Mobile_No"
          className="border w-full p-2 rounded mt-1"
          value={formValues.Mobile_No}
          onChange={handleInputChange}
        />
      </label>

      <label className="block mb-2">
        Designation:
        <select
          name="Designation"
          className="border w-full p-2 rounded mt-1"
          value={formValues.Designation}
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
            name="Gender"
            value="M"
            checked={formValues.Gender === 'M'}
            onChange={handleInputChange}
            className="form-radio"
          />
          <span className="ml-2">M</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="Gender"
            value="F"
            checked={formValues.Gender === 'F'}
            onChange={handleInputChange}
            className="form-radio"
          />
          <span className="ml-2">F</span>
        </label>
      </div>

      <div className="mb-2">
        <h3 className="mb-2">Courses:</h3>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="Courses"
            value="MCA"
            checked={formValues.Courses.includes('MCA')}
            onChange={handleCourseChange}
            className="form-checkbox"
          />
          <span className="ml-2">MCA</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="Courses"
            value="BCA"
            checked={formValues.Courses.includes('BCA')}
            onChange={handleCourseChange}
            className="form-checkbox"
          />
          <span className="ml-2">BCA</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="Courses"
            value="BSC"
            checked={formValues.Courses.includes('BSC')}
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
          onChange={(e) =>
            setFormValues((prevValues: any) => ({
              ...prevValues,
              Image: e.target.files ? e.target.files[0] : null,
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditEmployee;
