import { Link } from "react-router-dom";

const base =
  "inline-block rounded-full bg-yellow-400  text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

export default function Button({ children, disabled, to, type }) {
  const styles = {
    primary: base + " px-4 py-2 md:px-6 md:py-3",
    small: base + " px-2 py-2 md:px-6 md:py-3 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 text-stone-400  px-4 py-2 md:px-6 md:py-3  text-sm font-semibold uppercase tracking-wide  transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
