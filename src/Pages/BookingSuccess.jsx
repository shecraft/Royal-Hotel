import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/my-bookings");
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e8fb] px-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-[#732d91]">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for booking with Royal Hotel. Your reservation has been received.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          Redirecting to <strong>My Bookings</strong> in 5 seconds...
        </p>

        <Link
          to="/my-bookings"
          className="inline-block mt-4 bg-[#732d91] text-white py-2 px-4 rounded hover:shadow-lg transition"
        >
          View My Bookings Now
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
