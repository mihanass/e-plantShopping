import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
              +
            </button>

            <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
              -
            </button>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total Cart Value: ${total}</h3>

      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
