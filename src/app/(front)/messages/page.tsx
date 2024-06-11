import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import React from "react";

const Messages = () => {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-between w-full ">
        <div className="flex items-center justify-betweens md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        <HeaderTitle title="Messages" />
      </header>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="md:text-7xl text-4xl font-bold">
          Messages Coming Soon...
        </h1>
      </section>
    </>
  );
};

export default Messages;
