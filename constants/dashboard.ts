import { CreditCard, Users, TrendingUp, TrendingDown } from "lucide-react";

// Dashboard metrics displayed as stat cards
export const DASHBOARD_STATS = [
  {
    id: "revenue",
    title: "Monthly Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up" as const,
    icon: CreditCard,
  },
  {
    id: "users",
    title: "Active Users",
    value: "2,350",
    change: "+15.2%",
    trend: "up" as const,
    icon: Users,
  },
  {
    id: "churn",
    title: "Churn Rate",
    value: "2.4%",
    change: "-0.5%",
    trend: "down" as const,
    icon: TrendingDown,
  },
  {
    id: "growth",
    title: "Growth Rate",
    value: "12.5%",
    change: "+3.2%",
    trend: "up" as const,
    icon: TrendingUp,
  },
];

// Chart data for the last 6 months
export const REVENUE_CHART_DATA = [
  { month: "Aug", revenue: 32000, users: 1800 },
  { month: "Sep", revenue: 35000, users: 1950 },
  { month: "Oct", revenue: 38000, users: 2100 },
  { month: "Nov", revenue: 41000, users: 2200 },
  { month: "Dec", revenue: 43000, users: 2300 },
  { month: "Jan", revenue: 45231, users: 2350 },
];

// Recent activity items
export const RECENT_ACTIVITY = [
  { id: 1, message: "New user signed up", time: "1 hour ago" },
  { id: 2, message: "Payment received from John D.", time: "2 hours ago" },
  { id: 3, message: "New subscription: Pro Plan", time: "3 hours ago" },
  { id: 4, message: "User upgraded to Enterprise", time: "5 hours ago" },
];
