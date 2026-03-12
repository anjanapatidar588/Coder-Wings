import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart() {
  // Example cart items
  const cartItems = [
    { id: 1, name: "Gaming Keyboard", price: 120, quantity: 1 },
    { id: 2, name: "Headphones", price: 80, quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
    

      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <h2>Total: ${total}</h2>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;