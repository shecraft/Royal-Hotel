import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookingForm = () => {
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
        reset(); // clear form
      } else {
        toast.error(result.message || "Booking failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border"
      >
        <fieldset className="border border-gray-300 rounded-xl p-6">
          <legend className="text-2xl font-bold text-blue-700 px-3">Book a Room</legend>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Room Type */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Room Type
              </label>
              <select
                {...register("roomType", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Room</option>
                <option value="single">single</option>
                <option value="double">double</option>
                <option value="suite">suite</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                {...register("numberOfGuests", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Check-In */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Check-In Date
              </label>
              <input
                type="date"
                {...register("checkIn", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Check-Out Date
              </label>
              <input
                type="date"
                {...register("checkOut", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
