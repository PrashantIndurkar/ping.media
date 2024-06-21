"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signOut } from "next-auth/react";

export function AlertDialogLogout() {
  const logout = () => {
    signOut({ callbackUrl: "/", redirect: true });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-500 transition duration-150 ease-in-out text-xs border-none">
          Log Out
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to Log out?</AlertDialogTitle>
          <AlertDialogDescription>
            Logging out will end your session. You will need to log in again to
            use the app.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={logout}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
