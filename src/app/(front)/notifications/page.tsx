import HeaderTitle from "@/components/common/HeaderTitle";
import Logo from "@/components/common/Logo";
import { MobileSidebar } from "@/components/sidebar";
import NotificationsCard from "@/components/common/NotificationsCard";

import { getNotifications } from "@/lib/getNotifications";
import { ArrowLeft, UserRoundPlus } from "lucide-react";
import React from "react";

const Notifications = async () => {
  const notifications: Array<NotificationType> | [] = await getNotifications();
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
        {notifications &&
          notifications.map((notification) => (
            <NotificationsCard
              notification={notification}
              key={notification.id}
            />
          ))}
      </section>
    </>
  );
};

export default Notifications;
