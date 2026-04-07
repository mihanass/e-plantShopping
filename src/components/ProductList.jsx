import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Aromatic (6 cây)
  { id: 1, name: "Mint", price: 8, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Lavender", price: 12, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Rosemary", price: 10, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Basil", price: 9, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Thyme", price: 11, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Sage", price: 7, category: "Aromatic", img: "https://via.placeholder.com/100" },

  // Medicinal (6 cây)
  { id: 7, name: "Aloe Vera", price: 10, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulsi", price: 9, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Neem", price: 11, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Ginger", price: 6, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 11, name: "Turmeric", price: 8, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Chamomile", price: 10, category: "Medicinal", img: "https://via.placeholder.com/100" }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (item) => {
    dispatch(addItem(item));
    setAddedItems([...addedItems, item.id]);
  };

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
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>${item.price}</p>

                <button
                  onClick={() => handleAdd(item)}
                  disabled={addedItems.includes(item.id)}
                >
                  {addedItems.includes(item.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
