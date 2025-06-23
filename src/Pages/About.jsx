import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 px-6 md:px-16 mt-24">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-bold mb-6 text-center"
          style={{ color: "#732d91" }}
        >
          About Royal
        </h1>

        <p className="text-lg mb-4 leading-relaxed">
          <strong>Royal Hotel</strong> is your trusted platform for booking the perfect hotel experience — whether it's a luxury escape, a business trip, or a budget-friendly stay. We simplify the booking process, offering you verified hotel listings, real-time availability, and instant confirmation.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Our mission is simple:{" "}
          <span className="font-semibold" style={{ color: "#732d91" }}>
            Make hotel bookings seamless, smart, and stress-free
          </span>. With an easy-to-use interface and powerful search features, you can explore accommodations by price, rating, or location and book within minutes.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Behind Royal is a passionate team of developers and hospitality experts committed to innovation and customer satisfaction. We are constantly improving to provide a smooth, secure, and enjoyable experience for every traveler.
        </p>

        <div
          className="p-4 rounded-lg mt-8 text-center"
          style={{ backgroundColor: "#f3e8fb" }}
        >
          <p
            className="text-lg font-medium"
            style={{ color: "#732d91" }}
          >
            Built with 💜 using modern technologies like React, Node.js, and MongoDB.
          </p>
          <p className="text-sm mt-2" style={{ color: "#732d91" }}>
            Proudly developed by <strong>CodeWithFaizah</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
