import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define types for the form data
type VolunteerFormInputs = {
  name: string;
  email: string;
  phone: string;
  service: string;
  availability: string;
  message?: string;
};

// Define validation schema
const volunteerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  service: yup.string().required("Please select a service"),
  availability: yup.string().required("Please specify your availability"),
  message: yup.string().max(500, "Message can't exceed 500 characters")
});

const Volunteer: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VolunteerFormInputs>({
    resolver: yupResolver(volunteerSchema),
  });

  const onSubmit: SubmitHandler<VolunteerFormInputs> = (data) => {
    console.log("Volunteer Form Submitted: ", data);
    // Add form submission logic here, e.g., API call
  };

  return (
    <div className="volunteer-page relative top-32 mb-40 p-8 max-w-2xl mx-auto bg-white/20 shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Volunteer Registration</h2>
      <p className="text-center mb-8 text-gray-200">
        Register to volunteer your services and make a difference in relief areas and support the less fortunate.
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-200 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-2 border rounded-md"
          />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>
        
        {/* Email Field */}
        <div>
          <label className="block text-gray-200 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 border rounded-md"
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-200 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 border rounded-md"
          />
          <p className="text-red-600">{errors.phone?.message}</p>
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-gray-200 mb-2">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            {...register('service')}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select a service</option>
            <option value="healthcare">Healthcare & Medical</option>
            <option value="teaching">Education & Tutoring</option>
            <option value="elder_care">Elder & Disabled Care</option>
            <option value="construction">Construction & Repair</option>
            <option value="food_service">Food Service & Preparation</option>
            <option value="relief_support">Relief Support</option>
            <option value="home_support">Home & Shelter Services</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-600">{errors.service?.message}</p>
        </div>

        {/* Availability Field */}
        <div>
          <label className="block text-gray-200 mb-2">
            Availability (e.g., Weekends, Evenings) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('availability')}
            className="w-full px-4 py-2 border rounded-md"
          />
          <p className="text-red-600">{errors.availability?.message}</p>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-200 mb-2">Additional Message (optional)</label>
          <textarea
            {...register('message')}
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
          ></textarea>
          <p className="text-red-600">{errors.message?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-8/12 h-10 bg-orange-500 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
