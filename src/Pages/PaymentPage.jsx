import { useParams } from 'react-router-dom';
import React from "react";
import { useForm } from "react-hook-form";

const PaymentPage = () => {
  const { bookingId } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("bankName", data.bankName);
    formData.append("amount", data.amount);
    formData.append("bookingId", bookingId); 
    formData.append("screenshot", data.screenshot[0]);

    try {
      const res = await fetch("http://localhost:4000/api/payments/manual", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Payment submitted successfully!");
        reset();
      } else {
        alert(result.message || "❌ Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit payment.");
    }
  };

return (
  <div className="manual-payment-wrapper">
    <form
      className="manual-payment-form"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <h2>🧾 Manual Payment</h2>

      <label>Full Name:</label>
      <input {...register("name", { required: "Name is required" })} />
      <p className="error">{errors.name?.message}</p>

      <label>Bank Name:</label>
      <input {...register("bankName", { required: "Bank name is required" })} />
      <p className="error">{errors.bankName?.message}</p>

      <label>Amount (₦):</label>
      <input
        type="number"
        {...register("amount", { required: "Amount is required" })}
      />
      <p className="error">{errors.amount?.message}</p>

      <p className="booking-id"><strong>Booking ID:</strong> {bookingId}</p>

      <label>Upload Screenshot:</label>
      <input
        type="file"
        accept="image/*"
        {...register("screenshot", { required: "Screenshot is required" })}
      />
      <p className="error">{errors.screenshot?.message}</p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "⏳ Submitting..." : "💳 Submit Payment"}
      </button>
    </form>
  </div>
);


};

export default PaymentPage;
