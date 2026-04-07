import { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>

      {page === "home" && <AboutUs goToProducts={() => setPage("products")} />}
      {page === "products" && <ProductList />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;
