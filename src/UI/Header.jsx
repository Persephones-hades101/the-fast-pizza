import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-4 sm:px-6">
      <Link
        to="/"
        className="text-[14px] font-extrabold uppercase tracking-wide md:text-base"
      >
        The Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
