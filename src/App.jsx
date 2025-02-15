import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./UI/Home"));
const Error = lazy(() => import("./UI/Error"));
const Menu = lazy(() => import("./features/menu/Menu"));
const Cart = lazy(() => import("./features/cart/Cart"));
const CreateOrder = lazy(() => import("./features/order/CreateOrder"));
const Order = lazy(() => import("./features/order/Order"));
const AppLayout = lazy(() => import("./UI/AppLayout"));

// Import loaders and actions
import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import { action as createOrderAction } from "./features/order/CreateOrder";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
