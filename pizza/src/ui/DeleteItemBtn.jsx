import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteItemBtn({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type={"small"} onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItemBtn;
