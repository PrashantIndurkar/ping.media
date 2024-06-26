import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Dot, Menu } from "lucide-react";
import ThemeToggleBtn from "../common/theme-toggle-btn";
import { MobileSidebarLinks } from ".";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";

export const MobileSidebar = async () => {
  const session = await getAuthSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <MobileSidebarLinks user={session?.user ?? null} />

        <div className="mt-auto">
          <div className="mt-auto p-4 space-y-8">
            <ThemeToggleBtn />
            <div className="text-xs text-zinc-400 font-medium">
              <span>Blog</span> <Dot className="inline text-gray-600" />
              <span>Support</span> <Dot className="inline text-gray-600" />
              <span>Help</span> <Dot className="inline text-gray-600" />
              <span>T&C</span> <Dot className="inline text-gray-600" />{" "}
              <span>Code of Conduct</span>{" "}
              <Dot className="inline text-gray-600" />
              <span>Privacy</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
