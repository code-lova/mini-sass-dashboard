"use client";

import { useAuth } from "@/contexts/auth-context";

import { RevenueChart } from "./RevenueChart";
import { StatsCards } from "./StatsCards";
import { ActivityCard } from "./ActivityCard";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, {user?.displayName || "User"}!
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your SaaS metrics
        </p>
      </div>

      <>
        {/* Stats Cards */}
        <StatsCards />

        {/* Chart and Activity */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Revenue Chart */}
          <RevenueChart />

          {/* Recent Activity */}
          <ActivityCard />
        </div>
      </>
    </div>
  );
}
