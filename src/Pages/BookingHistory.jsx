import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import './BookingDashboard.css'; 

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCancelledBookings = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/bookings/my", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (res.ok) {
          const cancelled = (result.bookings || []).filter(
            (b) => b.status === "cancelled"
          );
          setBookings(cancelled);
        } else {
          toast.error(result.message || "Failed to fetch bookings");
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchCancelledBookings();
  }, [token]);

  return (
    <div className="booking-container mt-24">
      <h2 className="text-2xl font-bold mb-6 text-[#732d91] text-center">
        {/* Booking History */}
      </h2>

      {loading ? (
        <p>Loading history...</p>
      ) : bookings.length === 0 ? (
        <p>No cancelled bookings found.</p>
      ) : (
        <div className="booking-list mt-24">
          {bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <p><strong>Room:</strong> {booking.roomType}</p>
              <p><strong>Guests:</strong> {booking.numberOfGuests}</p>
              <p><strong>Check-In:</strong> {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p><strong>Check-Out:</strong> {new Date(booking.checkOut).toLocaleDateString()}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="status-cancelled">{booking.status}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
