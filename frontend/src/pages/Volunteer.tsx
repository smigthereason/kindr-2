import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

type VolunteerFormInputs = {
  name: string;
  email: string;
  phone: string;
  service: string;
  availability: string;
  message?: string;
};

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
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<VolunteerFormInputs> = async (data) => {
    setIsSubmitting(true);
    setResponseMessage("");

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      service: data.service,
      availability: data.availability,
      message: data.message || "",
    };

    try {
      const response = await emailjs.send(
        "service_qhhwe1i",
        "template_qk9uhcr",
        templateParams,
        "eMhqXRhTIu_OgnOnH"
      );

      if (response.status === 200) {
        setResponseMessage("Your volunteer request has been sent successfully!");
      } else {
        setResponseMessage("There was an issue sending your volunteer request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("There was an issue sending your volunteer request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="volunteer" className="p-8 flex flex-col md:flex-row justify-between bg-cover bg-center">
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
      <div className="volunteer-page relative top-32 mb-40 p-8 max-w-2xl mx-auto bg-black/90 border shadow-lg rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Volunteer Registration</h2>
        <p className="text-center mb-8 text-gray-200">
          Register to volunteer your services and make a difference in relief areas and support the less fortunate.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          <div>
            <label className="block text-gray-200 mb-2">Additional Message (optional)</label>
            <textarea
              {...register('message')}
              className="w-full px-4 py-2 border rounded-md"
              rows={4}
            ></textarea>
            <p className="text-red-600">{errors.message?.message}</p>
          </div>

          <button
            type="submit"
            className="w-8/12 h-10 bg-orange-500 text-white py-2 rounded-md hover:bg-gray-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {responseMessage && (
          <p className="mt-6 text-center text-lg text-orange-500">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
