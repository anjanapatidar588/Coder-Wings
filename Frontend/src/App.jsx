import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";     
import Contact from "./pages/Contact"; 
import Wishlist from "./pages/Wishlist"; 
import Like from "./pages/Like";
import Cart from "./pages/Cart";  

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar always visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />       
        <Route path="/contact" element={<Contact />} />   
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/like" element={<Like />} />  
        <Route path="/cart" element={<Cart />} /> {/* optional Cart page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;