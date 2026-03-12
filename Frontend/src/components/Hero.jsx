import "./Hero.css"

function Hero(){
  return(
    <div className="hero">

      <div className="hero-text">
        <h1>iPhone 14 Series</h1>
        <p>Up to 10% off Voucher</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img 
        src="https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        alt="phone"/>
      </div>

    </div>
  )
}

export default Hero