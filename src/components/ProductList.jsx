import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal" },
  { id: 2, name: "Mint", price: 8, category: "Aromatic" },
  { id: 3, name: "Lavender", price: 12, category: "Aromatic" },
  { id: 4, name: "Tulsi", price: 9, category: "Medicinal" }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = ["Aromatic", "Medicinal"];

  return (
    <div>
      <h2>Our Plants</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat} Plants</h3>

          {plants
            .filter(p => p.category === cat)
            .map(item => (
              <div key={item.id}>
                <h4>{item.name}</h4>
                <p>${item.price}</p>

                <button onClick={() => dispatch(addItem(item))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
