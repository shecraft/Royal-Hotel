import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Register from "./Pages/Register"
import Login from'./Pages/Login'
import Verify from "./Pages/Verify"
import { Toaster } from 'react-hot-toast'
import BookingDashboard from './Pages/BookingDashboard'
import BookRoom from './Pages/BookRoom'
import PaymentPage from './Pages/PaymentPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import BookingSuccess from './Pages/BookingSuccess'
import BookingHistory from './Pages/BookingHistory'
import ExploreRooms from "./Pages/ExploreRooms"
// import { Toaster } from "sooner";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/log" element={<Login />} />
            <Route path ="/verify/:token" element={<Verify />}/>
            <Route path='/my-bookings' element={<BookingDashboard />}/>
            <Route path='/book-room' element={<BookRoom />}/>
            <Route path='/payment/:bookingId' element={<PaymentPage/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path="/booking-success" element={<BookingSuccess/>} />
            <Route path='/booking-history' element={<BookingHistory />} />
            <Route path="/explore" element={<ExploreRooms />} />
         </Routes>
         <Footer/>
         <Toaster position="top-right" reverseOrder={false}/>
      </BrowserRouter>
    </>
  )
}

export default App
