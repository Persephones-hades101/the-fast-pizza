import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button";
import { updateOrder } from "../../services/apiRestaurant";
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  function handleMakePriority() {}
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" onClick={handleMakePriority}>
        Make Priority Order
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  // console.log("update");
  await updateOrder(params.orderId, data);
  return null;
}
