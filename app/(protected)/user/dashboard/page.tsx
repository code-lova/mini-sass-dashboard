import Dashboard from "@/components/dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Dashboard - Dashboard",
  description: "A minimal production-grade SaaS Dashboard",
};

export default function DashboardPage() {
  return <Dashboard />;
}
