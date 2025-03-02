import React, { useState } from "react";
import { toast } from "react-toastify";

const About = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* About Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About Discount PRO</h1>
        <p className="text-lg text-center">
          Discount PRO is your **go-to platform** for discovering exclusive discount coupons from 
          top e-commerce stores in Bangladesh. We help shoppers save money effortlessly 
          by providing **verified, up-to-date deals** from leading brands.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose Discount PRO?</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>✅ Access to exclusive e-commerce discounts</li>
            <li>✅ Easy-to-use platform with real-time updates</li>
            <li>✅ Verified coupon codes for top brands</li>
            <li>✅ Secure and user-friendly experience</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Vision</h2>
          <p className="text-gray-600">
            At Discount PRO, our mission is to **make online shopping more affordable**.  
            We aim to help users **discover the best deals** and maximize savings effortlessly.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
  title="OpenStreetMap"
  className="w-full h-64 rounded-lg shadow-lg"
  src="https://www.openstreetmap.org/export/embed.html?bbox=90.3563%2C23.685%2C90.4125%2C23.778&layer=mapnik"
  allowFullScreen
></iframe>

        </div>
      </div>
    </div>
  );
};

export default About;
