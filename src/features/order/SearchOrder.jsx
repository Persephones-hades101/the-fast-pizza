import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[8.5rem] rounded-full bg-yellow-100 px-4 py-2 text-xs transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 sm:w-64 sm:focus:w-72 md:text-sm"
      />
    </form>
  );
}
