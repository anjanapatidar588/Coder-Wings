import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const products = [
    {
      id: 1,
      name: "Gaming Keyboard",
      price: 120,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
      id: 2,
      name: "Headphones",
      price: 80,
      image: "https://images.unsplash.com/photo-1518449037785-8d6b6a8d7e8d"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 150,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de1f1d5"
    }
  ];

  return (
    <div>
      

      {/* Main Home Container */}
      <div className="home-container">
        <Sidebar />

        <div className="main-content">
          <Hero />

          <h2>Products</h2>

          <div className="products">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;