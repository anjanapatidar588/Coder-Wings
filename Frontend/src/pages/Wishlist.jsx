import React from "react";
import "./Wishlist.css";

// Sample product data
const wishlistItems = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    oldPrice: null,
    discount: null,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "GPII Shooter USB Gamepad",
    price: 550,
    oldPrice: null,
    discount: null,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    oldPrice: null,
    discount: null,
    image: "https://via.placeholder.com/150",
  },
];

const Wishlist = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  const handleMoveAllToCart = () => {
    alert("All items moved to cart!");
  };

  return (
    <div className="wishlist-container">
      <h2>Wishlist ({wishlistItems.length})</h2>
      <button className="move-all-btn" onClick={handleMoveAllToCart}>
        Move All To Bag
      </button>
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            {item.discount && <span className="discount-badge">{item.discount}</span>}
            <img src={item.image} alt={item.name} />
            <button className="add-cart-btn" onClick={() => handleAddToCart(item)}>
              Add To Cart
            </button>
            <h4>{item.name}</h4>
            <p className="price">
              ${item.price} {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;