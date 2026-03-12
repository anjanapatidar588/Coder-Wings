import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <div>
    

      <div className="about-container">
        <h1>Our Story</h1>
        <p>
          Welcome to Exclusive! We are committed to providing the best products
          and services to our customers. Our mission is to bring quality,
          style, and innovation together in every product we offer.
        </p>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Tom" />
              <h3>Tom Cruise</h3>
              <p>CEO</p>
            </div>
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Emma" />
              <h3>Emma Watson</h3>
              <p>Marketing Head</p>
            </div>
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Will" />
              <h3>Will Smith</h3>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;