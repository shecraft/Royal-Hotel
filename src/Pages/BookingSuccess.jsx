import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingId = location.state?.bookingId;


  useEffect(() => {
    if (bookingId) {
      const timeout = setTimeout(() => {
      navigate(`/payment/${bookingId}`);
    }, 2000); 

     return  ()=>clearTimeout(timeout)
    }
  


  }, [navigate, bookingId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e8fb] px-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-[#732d91]">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for booking with Royal Hotel. Your reservation has been received.
          Check your email for the details.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          Redirecting to <strong>Payment</strong> in 2 seconds...
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
