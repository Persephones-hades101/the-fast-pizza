import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Suspense } from "react";

export default function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation)
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="scrollbar-hide overflow-scroll">
        <Suspense fallback={<Loader />}>
          <main className="mx-auto max-w-4xl">
            <Outlet />
          </main>
        </Suspense>
      </div>

      <CartOverview />
    </div>
  );
}
