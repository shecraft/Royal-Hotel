import React from "react";
import { Link } from "react-router-dom";

const rooms = [
  {
    name: "Single Room",
    description: "Perfect for solo travelers. Includes 1 bed, private bath, and free WiFi.",
    image: "src/assets/Single.jpg",
    price: 15000,
  },
  {
    name: "Double Room",
    description: "Ideal for couples. Comes with 2 beds, air conditioning, and complimentary breakfast.",
    image: "src/assets/dou.jpg",
    price: 25000,
  },
  {
    name: "Executive Suite",
    description: "Luxury experience with a king-size bed, balcony view, minibar, and workspace.",
    image: "src/assets/ex.jpg",
    price: 60000,
  },
  {
    name: "Family Room",
    description: "Spacious for families. Includes 2 queen beds, a sofa, and kitchenette.",
    image: "src/assets/family.jpg",
    price: 40000,
  },
  {
    name: "Penthouse Suite",
    description: "Top-floor suite with skyline view, lounge, and deluxe amenities.",
    image: "src/assets/Penthouse.jpg",
    price: 120000,
  },
  {
    name: "Budget Room",
    description: "Affordable option with basic facilities and shared bathroom.",
    image: "src/assets/Budget.jpg",
    price: 8000,
  },
  {
    name: "Ocean View Room",
    description: "Wake up to ocean views. Includes a balcony and modern furnishings.",
    image: "src/assets/view.webp",
    price: 50000,
  },
  {
    name: "Deluxe King Room",
    description: "Spacious room with king-size bed, LED TV, and work desk.",
    image: "src/assets/delxue.jpg",
    price: 45000,
  },
  {
    name: "Spa Suite",
    description: "Private in-room jacuzzi and wellness amenities.",
    image: "src/assets/spa.jpg",
    price: 70000,
  },
  {
    name: "City View Room",
    description: "Room with a full view of the city skyline, ideal for photographers.",
    image: "src/assets/cityview.jpg",
    price: 38000,
  },
  {
    name: "Presidential Suite",
    description: "The most luxurious stay with full service and 24/7 personal assistant.",
    image: "src/assets/presidential.jpg",
    price: 150000,
  },
  {
    name: "Studio Room",
    description: "Open-plan space with kitchen, workspace, and living area.",
    image: "src/assets/studio.jpg",
    price: 35000,
  },
  {
    name: "Business Room",
    description: "Equipped with high-speed internet, office desk, and meeting access.",
    image: "src/assets/business.avif",
    price: 42000,
  },
  {
    name: "Garden View Room",
    description: "Peaceful room overlooking our beautiful garden.",
    image: "src/assets/garden.jpg",
    price: 30000,
  },
  {
    name: "Accessible Room",
    description: "Designed for all guests. Barrier-free access, support bars, and wide doorways.",
    image: "src/assets/access.avif",
    price: 20000,
  }
];


const ExploreRooms = () => {
  return (
    <div className="bg-[#f3e8fb] min-h-screen pt-20 px-6 md:px-16 pb-10">
      <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#8e44ad" }}>
        Explore Our Rooms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#732d91] mb-2">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <p className="text-gray-600 text-xl mb-4">{room.price}</p>
              <Link
                to="/book-room"
                className="inline-block text-white px-4 py-2 rounded hover:bg-purple-900 transition shadow-md"
                style={{ backgroundColor: "#8e44ad" }} >
            Book Now
          </Link>

            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default ExploreRooms;
