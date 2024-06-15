"use client";
import { FormEvent, useState } from "react";

const SearcBar = ({ restultSearch }: any) => {
  const [search, setSearch] = useState("");

  const submitHeandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let text = search.replace(/\s/g, "").toLowerCase();
    const res = await fetch(`https://api.github.com/users/${text}`);
    restultSearch(await res.json());
  };

  return (
    <form
      className="flex justify-center items-center gap-2"
      onSubmit={submitHeandler}
    >
      <input
        type="text"
        placeholder="Search username github..."
        className="border-2 p-2 rounded-md min-w-[200px] focus:outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="p-2 border-2 border-black/10 rounded-md text-slate-400 hover:text-slate-600 hover:border-black/20 ease-in-out duration-200">
        Search
      </button>
    </form>
  );
};

export default SearcBar;
