import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Bookmarks = () => {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15 z-10 flex items-center justify-between w-full ">
        <div className="flex items-center justify-betweens md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        <HeaderTitle title="Bookmarks" />
      </header>
    </>
  );
};

export default Bookmarks;