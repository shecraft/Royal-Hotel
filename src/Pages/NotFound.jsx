import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-lg">
        {/* 404 Image */}
        <img
          src="src/assets/Error remove.png"
          alt="Not Found"
          className="w-full max-w-md mx-auto mb-6"
        />

        <h1 className="text-4xl font-12" style={{ color: "#732d91" }}>
          404 - Page Not Found
        </h1>

        <p className="text-gray-600 mt-4">
          Sorry, the page you're looking for doesn't exist 😢
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-purple-900 text-white py-2 px-4 rounded hover:bg-[#732d91]900 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
