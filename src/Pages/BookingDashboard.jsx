import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import Swal from 'sweetalert2';
import './BookingDashboard.css'; 
import ClipLoader from "react-spinners/ClipLoader";


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
        toast.error("Something went wrong while fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const handleCancel = async (id) => {
   const confirm = await Swal.fire({
  title: "Are you sure?",
  text: " You want to cancel this booking?",
  // icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#e74c3c",
  confirmButtonText: "Yes, cancel it!",
  cancelButtonText: "No",
  width: 300,
  // iconHtml: '<i class="swal2-icon-content">!</i>', 
  customClass: {
    popup: 'swal2-small-popup',
    title: 'swal2-small-title',
    htmlContainer: 'swal2-small-text',
    confirmButton: 'swal2-small-btn',
    cancelButton: 'swal2-small-btn',
  }
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
          toast.error(result.message || "Could not cancel");
        }
      } catch (err) {
        console.error("Cancel error:", err);
        toast.error("Something went wrong during cancellation.");
      }
    }
  };

 return (
    <div className="booking-container">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ClipLoader color="#732d91" size={50} />
        </div>
      ) : bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <div className="booking-list mt-20">
          {bookings
            .filter((booking) => booking.status !== "cancelled")
            .map((booking) => (
              <div key={booking._id} className="booking-card">
                <p><strong>Room:</strong> {booking.roomType}</p>
                <p><strong>Guests:</strong> {booking.numberOfGuests}</p>
                <p><strong>Check-In:</strong> {new Date(booking.checkIn).toLocaleDateString()}</p>
                <p><strong>Check-Out:</strong> {new Date(booking.checkOut).toLocaleDateString()}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      booking.status === "cancelled"
                        ? "status-cancelled"
                        : booking.status === "confirmed"
                        ? "status-confirmed"
                        : "status-pending"
                    }
                  >
                    {booking.status}
                  </span>
                </p>

                {booking.status !== "cancelled" && (
                  <div className="booking-actions">
                    <button className="cancel-btn" onClick={() => handleCancel(booking._id)}>
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );

};

export default BookingDashboard;
