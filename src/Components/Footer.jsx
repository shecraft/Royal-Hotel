import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Brand & Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Royal Hotel</h3>
          <p>Book your stay with comfort and ease.</p>
          <p><i className="fas fa-map-marker-alt"></i> Lugbe, Abuja</p>
          <p><i className="fas fa-envelope"></i> support@codewithfaizah.com</p>
          <p><i className="fas fa-phone"></i> +234 8028783034</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.title}>Quick Links</h4>
          <ul style={styles.links}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link  to="/booking-history">Booking History</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h4 style={styles.title}>Newsletter</h4>
          <p>Get updates and special offers in your inbox.</p>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <button style={styles.btn}>Subscribe</button>
          <div style={styles.icons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} CodeWithFaizah. All rights reserved.</p>
      </div>
    </footer>
  );
};

// 💡 Add responsive styles
const styles = {
  footer: {
    background: "#222",
    color: "#eee",
    padding: "40px 20px 10px",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
  },
  section: {
    flex: "1 1 300px",
    minWidth: "250px",
  },
  logo: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#ffcc00",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#ffcc00",
  },
  links: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
  },
  input: {
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "none",
    fontSize: "14px",
    color:"white"
  },
  btn: {
    background: "#ffcc00",
    color: "#000",
    border: "none",
    padding: "10px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    fontSize: "1.2rem",
  },
  bottom: {
    borderTop: "1px solid #444",
    marginTop: "30px",
    paddingTop: "10px",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};

export default Footer;
