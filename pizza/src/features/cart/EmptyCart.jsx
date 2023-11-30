import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div>
      <LinkButton type={"small"} to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className="pt-4">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
