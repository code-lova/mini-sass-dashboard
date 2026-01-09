"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  ChevronLeft,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/auth-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, secondaryNavigation } from "@/constants";


export function DashboardSidebar() {
  const pathname = usePathname();
  const { state, toggleSidebar, isMobile } = useSidebar();
  const { user, signOut } = useAuth();
  const isCollapsed = state === "collapsed";

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-background transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          isMobile && "hidden"
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex h-16 items-center border-b px-4",
            isCollapsed ? "justify-center" : "justify-between"
          )}
        >
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <LayoutDashboard className="h-4 w-4" />
              </div>
              <span className="font-semibold">SaaS App</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn("h-8 w-8", isCollapsed && "rotate-180")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const NavItem = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{NavItem}</TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              );
            }

            return NavItem;
          })}
        </nav>

        {/* Secondary Navigation */}
        <div className="border-t p-2">
          {secondaryNavigation.map((item) => {
            const isActive = pathname === item.href;
            const NavItem = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{NavItem}</TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              );
            }

            return NavItem;
          })}
        </div>

        {/* User section */}
        <div className="border-t p-2">
          <div
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2",
              isCollapsed && "justify-center px-2"
            )}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium">
              {user?.displayName?.[0] || user?.email?.[0] || "U"}
            </div>
            {!isCollapsed && (
              <div className="flex-1 truncate">
                <p className="text-sm font-medium truncate">
                  {user?.displayName || "User"}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.email}
                </p>
              </div>
            )}
          </div>

          <div
            className={cn(
              "mt-2 flex items-center gap-1",
              isCollapsed ? "flex-col" : "justify-between px-1"
            )}
          >
            <ThemeToggle />
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => signOut()}
                    className="h-8 w-8"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Sign out</TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
