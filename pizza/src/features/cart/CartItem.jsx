import { formatCurrency } from "../../utils/helpers";
import DeleteItemBtn from "../../ui/DeleteItemBtn";
import QuantityBtns from "../../ui/QuantityBtns";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="p-3 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between">
        <QuantityBtns pizzaId={pizzaId} quantity={quantity} />
        <p className="mr-4 text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItemBtn pizzaId={pizzaId}>Delete</DeleteItemBtn>
      </div>
    </li>
  );
}

export default CartItem;
