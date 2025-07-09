import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleProtectedRoute = (e, path) => {
    e.preventDefault();

    if (!token) {
      toast.error("You must sign in before accessing this page!");
      navigate("/log");
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">👑 Royal Hotel</Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          <Link to="/explore" onClick={() => setMobileMenuOpen(false)}>Explore Rooms</Link>

          <Link to="/book-room" onClick={(e) => handleProtectedRoute(e, "/book-room")}>Book Now</Link>
          <Link to="/my-bookings" onClick={(e) => handleProtectedRoute(e, "/my-bookings")}>My Bookings</Link>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

          {!token ? (
            <div className="auth-links">
              <Link to="/log" onClick={() => setMobileMenuOpen(false)} className="auth-btn login">Login</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="auth-btn register">Register</Link>
            </div>
          ) : (
            <div className="auth-links">
              <button
                className="auth-btn logout"
                onClick={() => {
                  localStorage.removeItem("token");
                  toast.success("Logged out successfully!");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
