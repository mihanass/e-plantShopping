import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>

      {/* Landing Page */}
      {page === "home" && (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setPage("products")}>
            Get Started
          </button>
        </div>
      )}

      {/* Product Page */}
      {page === "products" && (
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("cart")}>Cart</button>
          <ProductList />
        </div>
      )}

      {/* Cart Page */}
      {page === "cart" && (
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("products")}>Products</button>
          <CartItem />
        </div>
      )}

    </div>
  );
}

export default App;
