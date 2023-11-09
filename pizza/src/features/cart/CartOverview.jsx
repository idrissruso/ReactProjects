import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-s flex items-center justify-between bg-stone-800 p-2 text-stone-200 sm:p-4 sm:text-lg">
      <p className="space-x-3 text-stone-300">
        <span className="uppercase">23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="uppercase text-white">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
