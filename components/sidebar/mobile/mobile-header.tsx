"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebar } from "@/components/ui/sidebar";
import { MobileSidebarContent } from "./mobile-sidebar-content";

export function MobileHeader() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (!isMobile) return null;

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center border-b bg-background px-4 md:hidden">
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="-ml-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <MobileSidebarContent onNavigate={() => setOpenMobile(false)} />
        </SheetContent>
      </Sheet>
      <span className="ml-2 font-semibold">SaaS App</span>
    </header>
  );
}
