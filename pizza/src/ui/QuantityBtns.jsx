import Button from "./Button";
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../features/cart/cartSlice";
import { decreaseQuantity } from "../features/cart/cartSlice";

function QuantityBtns({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="mx-3 flex items-center gap-2">
      <Button
        type={"rounded"}
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </Button>
      <p className="text-sm font-bold">{quantity}</p>
      <Button
        type={"rounded"}
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default QuantityBtns;
