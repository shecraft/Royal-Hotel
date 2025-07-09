import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./booking.css";
import ClipLoader from "react-spinners/ClipLoader";

const BookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || "Booking successful");
        const bookingId = result.booking?._id;
        if (bookingId) {
          navigate(`/booking-success`, { state: { bookingId }}); // it was here before         //  /payment/${bookingId}
        }
        reset();
      } else {
        toast.error(result.message || "Booking failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
        <fieldset className="booking-fieldset">
          <legend className="booking-legend">Book a Room</legend>

          <div className="booking-grid">
            <div>
              <label className="booking-label">Room Type</label>
              <select {...register("roomType", { required: true })} className="booking-input">
                <option value="">Select Room</option>
                <option value="single">single</option>
                <option value="double">double</option>
                <option value="suite">suite</option>
              </select>
            </div>

            <div>
              <label className="booking-label">Number of Guests</label>
              <input type="number" min="1" {...register("numberOfGuests", { required: true })} className="booking-input" />
            </div>

            <div>
              <label className="booking-label">Check-In Date</label>
              <input type="date" {...register("checkIn", { required: true })} className="booking-input" />
            </div>

            <div>
              <label className="booking-label">Check-Out Date</label>
              <input type="date" {...register("checkOut", { required: true })} className="booking-input" />
            </div>
          </div>

          <div className="booking-button-wrap">
            <button type="submit" disabled={isSubmitting} className="booking-button">
            {isSubmitting ? <ClipLoader size={20} color="#fff" /> : "Book Now"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
