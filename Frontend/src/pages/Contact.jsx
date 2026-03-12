import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div>
     

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below.</p>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            Message
            <textarea placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>123 E-Commerce St., Mumbai, India</p>
          <p>Email: support@exclusive.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;