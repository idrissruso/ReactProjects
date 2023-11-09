import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-8 text-center">
      <h1 className=" my-5 p-4 text-xl font-bold text-stone-700 md:text-5xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
