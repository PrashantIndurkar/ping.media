import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import NotificationsCard from "@/components/common/NotificationsCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription } from "@/components/ui/card";
import { ArrowLeft, UserRoundPlus } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-between w-full ">
        <div className="flex items-center justify-betweens md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        <HeaderTitle title="Notifications" />
      </header>
      <section>
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
      </section>
    </>
  );
};

export default Notifications;
