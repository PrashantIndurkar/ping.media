import React from "react";
import Link from "next/link";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Home as HomeIcon,
  Menu,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const extra = () => {
  return (
    <div className="flex h-screen divide-x divide-gray-300">
      <div className="border-gray-300 w-48 flex-shrink-0">Sidebar</div>
      <div className="flex-1 flex flex-col border-gray-300">
        <header className="h-12 border-b">Feed</header>
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <p>main content that is scrollable</p>
          <p>more content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </main>
      </div>
      <div className="w-48 flex-shrink-0">Top picks</div>
    </div>
  );
};

export default extra;
