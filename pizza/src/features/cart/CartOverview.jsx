import { Link } from "react-router-dom";
import { getTotalCartPrice } from "./cartSlice";
import { getTotalCartQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const tPrice = useSelector(getTotalCartPrice);
  const tQuantity = useSelector(getTotalCartQuantity);

  if (!tQuantity) return null;

  return (
    <div className="text-s flex items-center justify-between bg-stone-800 p-2 text-stone-200 sm:p-4 sm:text-lg">
      <p className="space-x-3 text-stone-300">
        <span className="uppercase">{tQuantity} pizzas</span>
        <span>{formatCurrency(tPrice)}</span>
      </p>
      <Link to="/cart" className="uppercase text-white">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
