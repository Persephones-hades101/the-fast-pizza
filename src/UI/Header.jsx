import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to='/'>The Fast Pizza Co.</Link>
      <SearchOrder />
      <p>Sudhanshu Singh</p>
    </header>
  )
}
