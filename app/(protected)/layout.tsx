"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar, MobileHeader } from "@/components/sidebar";
import { useAuth } from "@/contexts/auth-context";
import PageLoading from "@/components/ui/page-loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return (
    <SidebarProvider>
      <div className="relative min-h-screen w-full">
        <DashboardSidebar />
        <div className="min-h-screen pl-0 md:pl-16 lg:pl-64 transition-all duration-300">
          <MobileHeader />
          <main className="p-4 md:p-6 lg:p-8">
            {loading ? (
              <PageLoading message="Getting things ready..." />
            ) : user ? (
              children
            ) : null}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
