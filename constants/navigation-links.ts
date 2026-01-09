import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  CreditCard,
  HelpCircle,
} from "lucide-react";


export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const secondaryNavigation = [
  {
    title: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
];