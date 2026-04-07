import { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  // lấy tổng số lượng từ Redux
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>
          Cart ({totalQuantity})
        </button>
      </nav>

      {page === "home" && <AboutUs goToProducts={() => setPage("products")} />}
      {page === "products" && <ProductList />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;
