import React from "react"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import DemoPage from "./DemoPage"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav-demo" element={<DemoPage />} />
        {/* To catch all the Routes that are not resolved */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  )
}

export default App