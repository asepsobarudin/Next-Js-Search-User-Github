"use client";

import { useState } from "react";
import SearcBar from "./include/search_bar";
import SearchResult from "./include/search_result";

const SearchUser = () => {
  const [result, setResult] = useState();

  return (
    <main className="mt-10 flex flex-col justify-center items-center">
      <SearcBar restultSearch={setResult} />
      {result && <SearchResult result={result} />}
    </main>
  );
};

export default SearchUser;
