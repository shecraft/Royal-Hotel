import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Register from "./Pages/Register"
import Login from'./Pages/Login'
import Verify from "./Pages/Verify"
import { Toaster } from 'react-hot-toast'
// import { Toaster } from "sooner";

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/log" element={<Login />} />
            <Route path ="/veri" element={<Verify />}/>
         </Routes>
         <Toaster position="top-right" reverseOrder={false}/>
      </BrowserRouter>
    </>
  )
}

export default App
