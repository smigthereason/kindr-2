import React, { useState } from 'react';
import worldImage from "../assets/world2.jpg"

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    // <div className="bg-black text-white p-8 flex justify-between">
    <div
    className="bg-black text-white p-8 flex justify-between bg-cover bg-center"
    style={{ backgroundImage: `url(${worldImage})` }}
  >
     <div className="relative top-32 left-10 w-2/3 pr-8 mb-32">
        <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
        <h2 className="text-4xl font-bold mb-8">Send Me A Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-700 p-3 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder=" Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-700 p-3 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+254"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-700 p-3 rounded"
            />
          </div>
          <textarea
            name="message"
            placeholder="Type Your Message Here..."
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-700 p-3 rounded w-full h-32 mb-4"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className=" relative top-32 w-1/3">
        <h3 className="text-4xl font-bold mb-4">Address</h3>
        <p className="mb-4 text-xl">
        Ngong Ln, Nairobi
        Kenya.
        P.O Box 25773-00100 NBI GPO
        </p>
        <p className="mb-2 text-xl">Location : Nairobi, Kenya</p>
        <p className="mb-2 text-xl">Phone : +254123456</p>
        <p className='text-xl font-bold'>Email : Kindra@Gmail.Com</p>
      </div>
    </div>
  );
};

export default Contact;