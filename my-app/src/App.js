import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpperCaseTextbox from "./component/uppercase";
import Navbar from "./component/Navbar";
import About from "./Pages/About";
import Footer from "./component/Footer";  // Import the Footer component

function App() {
  return (
    <div className="App">
      <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<UpperCaseTextbox />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />

      </Router>

     
     
    </div>
  );
}

export default App;
