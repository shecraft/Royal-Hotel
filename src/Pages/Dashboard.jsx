import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Royal Hotel</h1>
          <p>Experience comfort, luxury, and relaxation like never before.</p>
          <button onClick={() => navigate("/book-room")}>Book a Room</button>
        </div>
      </header>

      <section className="about">
        <h2>About Royal Hotel</h2>
        <p>
          Royal Hotel is a premium destination for travelers seeking a unique blend
          of comfort and luxury. Whether you're here for business or leisure, our
          hotel offers a tranquil escape in the heart of the city.
        </p>
        <p>
          We feature beautifully designed rooms with modern amenities, 24-hour room
          service, high-speed Wi-Fi, and a dedicated staff committed to making your
          stay memorable.
        </p>
        <p>
          Our restaurant serves delicious local and international cuisine, and our
          wellness facilities include a swimming pool, gym, and spa. Come and
          experience hospitality at its finest.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Free Wi-Fi</h3>
            <p>Stay connected anytime with high-speed internet access throughout the hotel.</p>
          </div>
          <div className="service-card">
            <h3>24/7 Room Service</h3>
            <p>Enjoy meals, drinks, or anything you need delivered right to your room.</p>
          </div>
          <div className="service-card">
            <h3>Swimming Pool</h3>
            <p>Relax and refresh in our crystal-clear pool with lounge chairs and drinks service.</p>
          </div>
          <div className="service-card">
            <h3>Air-conditioned Rooms</h3>
            <p>All our rooms come with adjustable AC for your comfort and relaxation.</p>
          </div>
          <div className="service-card">
            <h3>Secure Parking</h3>
            <p>Safe and convenient parking is available for all our guests 24/7.</p>
          </div>
          <div className="service-card">
            <h3>Restaurant & Bar</h3>
            <p>Enjoy delicious meals and beverages from our onsite restaurant and bar.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="total_testominal">
          <div className="testimonial">
            <p>"Amazing experience! The service was top-notch and the ambiance is relaxing."</p>
            <span>- Sarah A.</span>
          </div>
          <div className="testimonial">
            <p>"Best hotel in the city! Clean rooms, friendly staff, and great food."</p>
            <span>- John M.</span>
          </div>
          <div className="testimonial">
            <p>"Best hotel in the city! Clean rooms, friendly staff, and great food."</p>
            <span>- James T.</span>
         </div>

          <div className="testimonial">
            <p>"I had a peaceful and relaxing stay. The environment was just perfect."</p>
            <span>- Grace O.</span>
         </div>
        </div>
      </section>

      <section className="gallery">
        <h2>Gallery :</h2>
        <div className="gallery-grid">
          <img src="src/assets/hotelRoom.jpg" alt="Room 1" />
          <img src="src/assets/hotelRes.jpg" alt="Restaurant" />
          <img src="src/assets/hotelPool.jpg" alt="Pool" />
          <img src="src/assets/hotelSpot.jpg" alt="Spot" />
          <img src="src/assets/hotelGym.jpg" alt="Gym" />
          <img src="src/assets/hotelLobby.jpg" alt="Lobby" />
          
        </div>
      </section>

     <div className="map-section">
        <h2>Hotel Location</h2>
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.538844489583!2d7.495082774996239!3d9.057850489156387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a50a3c9f0eb%3A0x939ab4cc6f5c5a1a!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1718544758821!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>Address: 123 Royal Street, Abuja, Nigeria</p>
        <p>Email: contact@royalhotel.com</p>
        <p>Phone: +234 800 123 4567</p>
     </div>


      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Royal Hotel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
