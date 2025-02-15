import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import {
  decrementItemQuantity,
  getCurrentQuantityById,
  incrementItemQuantity,
} from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(incrementItemQuantity(pizzaId))}
      >
        +
      </Button>
      <p className="text-xs font-semibold">{currentQuantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(decrementItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}
