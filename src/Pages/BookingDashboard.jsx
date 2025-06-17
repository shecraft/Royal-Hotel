import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("Missing token. Please login again.");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/bookings/my", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (res.ok) {
          setBookings(result.bookings || []);
        } else {
          toast.error(result.message || "Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        Swal.fire("Error", "Something went wrong while fetching bookings.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      confirmButtonText: "Yes, cancel it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:4000/api/bookings/cancel/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (res.ok) {
          Swal.fire("Cancelled", result.message || "Booking cancelled", "success");
          setBookings((prev) =>
            prev.map((b) => (b._id === id ? { ...b, status: "cancelled" } : b))
          );
        } else {
          Swal.fire("Error", result.message || "Could not cancel", "error");
        }
      } catch (err) {
        console.error("Cancel error:", err);
        Swal.fire("Error", "Something went wrong during cancellation.", "error");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Bookings</h2>

      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              marginBottom: "15px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>Room:</strong> {booking.roomType}</p>
            <p><strong>Guests:</strong> {booking.numberOfGuests}</p>
            <p><strong>Check-In:</strong> {new Date(booking.checkIn).toLocaleDateString()}</p>
            <p><strong>Check-Out:</strong> {new Date(booking.checkOut).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {booking.status}</p>

            {booking.status !== "cancelled" && (
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => handleCancel(booking._id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Cancel Booking
                </button>

                <a
                  href={`/payment/${booking._id}`}
                  style={{
                    backgroundColor: "#2ecc71",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Make Payment
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BookingDashboard;
