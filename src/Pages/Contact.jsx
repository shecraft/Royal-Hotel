import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-16 mt-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#732d91" }}
        >
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have any questions, suggestions, or partnership inquiries? Feel free to reach out — we’d love to hear from you!
        </p>

        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded focus:outline-none"
              style={{ borderColor: "#ccc", outlineColor: "#732d91" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border rounded focus:outline-none"
              style={{ borderColor: "#ccc", outlineColor: "#732d91" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-2 border rounded focus:outline-none"
              style={{ borderColor: "#ccc", outlineColor: "#732d91" }}
            />
          </div>

          <button
            type="submit"
            className="text-white py-2 px-4 rounded transition"
            style={{ backgroundColor: "#732d91" }}
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-8">
          Or email us directly at{" "}
          <a
            href="mailto:info@stayease.com"
            className="underline"
            style={{ color: "#732d91" }}
          >
            info@stayease.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
