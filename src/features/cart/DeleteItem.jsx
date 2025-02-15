import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "./updateItemQuantity";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-10">
      <UpdateItemQuantity pizzaId={pizzaId} />
      <Button type="small" onClick={handleDeleteItem}>
        Delete
      </Button>
    </div>
  );
}
