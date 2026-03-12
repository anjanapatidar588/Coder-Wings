import "./Signup.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Signup(){
  return(

    <div>

      

      <div className="signup-container">

        <div className="signup-image">
          <img 
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
          alt="shopping"/>
        </div>

        <div className="signup-form">

          <h2>Create an account</h2>
          <p>Enter your details below</p>

          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>

          <button className="create-btn">Create Account</button>

          <button className="google-btn">
            Sign up with Google
          </button>

          <p className="login-text">
            Already have account? <span>Log in</span>
          </p>

        </div>

      </div>
<Footer />
    </div>

  )
}

export default Signup