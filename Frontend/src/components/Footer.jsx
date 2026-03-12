import "./Footer.css"

function Footer(){
  return(

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email"/>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </div>

        <div className="footer-section">
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

      </div>

      <p className="copyright">
        © Copyright Exclusive 2025
      </p>

    </footer>

  )
}

export default Footer