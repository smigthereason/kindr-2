import React, { useState } from "react";
import emailjs from "emailjs-com";
import worldImage from "../assets/world2.jpg";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_qhhwe1i",
        "template_qk9uhcr",
        templateParams,
        "eMhqXRhTIu_OgnOnH"
      );

      if (response.status === 200) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(
          "There was an issue sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(
        "There was an issue sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact"
      className="bg-black text-white p-8 flex flex-col md:flex-row justify-between bg-cover bg-center "
      style={{ backgroundImage: `url(${worldImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 sm:bg-gray-950 opacity-50"></div>
      <div className="relative top-32 left-10 w-4/5 md:w-2/3 pr-8 mb-32">
        <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
        <h2 className="text-4xl font-bold mb-8">We would love to hear from you.</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-gray-700 p-3 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-gray-700 p-3 rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-700 p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+254"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-gray-700 p-3 rounded"
            />
          </div>
          <textarea
            name="message"
            placeholder="Type Your Message Here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-700 p-3 rounded w-full h-32 mb-4"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 text-white px-6 py-3 rounded disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {responseMessage && (
          <div
            className={`mt-4 text-lg ${
              responseMessage.includes("successfully")
                ? "text-orange-500"
                : "text-red-500"
            }`}
          >
            {responseMessage}
          </div>
        )}
      </div>
      <div className="relative top-32 w-full md:w-1/3 ">
        <h3 className="text-4xl font-bold mb-4">Address</h3>
        <p className="mb-4 text-xl">
          Ngong Ln, Nairobi Kenya. P.O Box 25773-00100 NBI GPO
        </p>
        <p className="mb-2 text-xl">Location: Nairobi, Kenya</p>
        <p className="mb-2 text-xl">Phone: +254123456</p>
        <p className="mb-40 text-xl font-bold">Email: prodbysmig@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
