import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Head() {
  return (
    <header
      className="flex items-center justify-between 
    bg-yellow-500 px-2 py-1 uppercase sm:px-4 sm:py-3"
    >
      <Link to="/" className="uppercase tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Head;
