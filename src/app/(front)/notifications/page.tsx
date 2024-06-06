import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import NotificationsCard from "@/components/common/NotificationsCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription } from "@/components/ui/card";
import { UserRoundPlus } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15 z-10 flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">Notifications</h3>
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
