import { useState } from "react"
import axios from "axios"
import "./Login.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async (e)=>{
    e.preventDefault()

    try{

      const res = await axios.post("http://localhost:3000/api/user/login",{
        email,
        password
      })

      alert("Login Successful")

      console.log(res.data)

      localStorage.setItem("token",res.data.token)

    }
    catch(err){
      alert("Login Failed")
    }

  }

  return(

    <div>

      

      <div className="login-container">

        <div className="login-image">
          <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
          alt="shopping"/>
        </div>

        <div className="login-form">

          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          <form onSubmit={handleLogin}>

            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button className="login-btn">Log In</button>

          </form>

        </div>

      </div>
<Footer />
    </div>
  )
}

export default Login