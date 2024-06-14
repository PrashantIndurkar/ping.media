"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.replace(`/explore?query=${query}`);
  };
  return (
    <form onSubmit={submit} className="relative w-full max-w-full pl-4 md:pl-0">
      <Input
        className="h-10 pl-4 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <X className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 rounded-full p-2 cursor-pointer" />
    </form>
  );
};

export default SearchBar;
