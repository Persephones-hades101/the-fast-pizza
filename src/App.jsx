import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./UI/Home"
import Error from "./UI/Error"
import Menu, { loader as menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./UI/AppLayout"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path: "/order/:orderId",
        element: <Order />
      },
    ]

  }
])


export default function App() {
  return <RouterProvider router={router} />
}
