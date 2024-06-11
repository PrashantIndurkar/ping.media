"use client";
import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import SearchCard from "@/components/common/SearchCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, X } from "lucide-react";
import React from "react";

const Search = () => {
  const [search, setSearch] = React.useState<boolean>(false);
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-betweens w-full ">
        <div className="flex items-center justify-betweens w-full md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        {search ? (
          <div className="relative w-full max-w-full">
            <Input
              className="h-10 pl-4 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
              placeholder="Search..."
            />
            <X
              onClick={() => setSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 rounded-full p-2 cursor-pointer"
            />
          </div>
        ) : (
          <>
            <HeaderTitle />
            <button
              onClick={() => setSearch(true)}
              className=" text-lg font-medium hidden md:block md:pointer-events-none"
            >
              Search
            </button>
            <div
              onClick={() => setSearch(true)}
              className="border md:hidden border-zinc-300  dark:border-zinc-600 p-2 rounded-full hover:dark:bg-zinc-800/65 hover:bg-zinc-100 cursor-pointer"
            >
              <SearchIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </div>
          </>
        )}
      </header>

      <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </section>
    </>
  );
};

export default Search;
