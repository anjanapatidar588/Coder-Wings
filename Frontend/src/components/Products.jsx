import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Products from "../components";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <Sidebar />

        <div className="main-content">
          {/* Hero section at top */}
          <Hero />

          {/* Products component */}
          <Products />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;