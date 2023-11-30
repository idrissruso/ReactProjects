import CreateUser from "../features/user/CreateUser";

import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const userName = useSelector((store) => store.user.userName);

  return (
    <div className="my-8 text-center">
      <h1 className=" my-5 p-4 text-xl font-bold text-stone-700 md:text-5xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue to order mr {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
