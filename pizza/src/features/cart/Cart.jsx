import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "../cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const userName = useSelector((store) => store.user.userName);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch(9);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-400 border-b">
        {cart.map((pizza) => (
          <CartItem item={pizza} key={pizza.pizzaId}></CartItem>
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
