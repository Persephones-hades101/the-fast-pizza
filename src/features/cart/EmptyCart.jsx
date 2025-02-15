import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="px-6 py-5">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
