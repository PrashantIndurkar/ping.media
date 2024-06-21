import HeaderTitle from "@/components/common/header-title";
import { Logo } from "@/components/logo";
import { MobileSidebar } from "@/components/sidebar";
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
      <section className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="md:text-muted text-center text-lg font-bold">
          Messaging page Coming Soon...
        </h1>
      </section>
    </>
  );
};

export default Messages;
