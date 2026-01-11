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
    href: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/user/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/user/customers",
    icon: Users,
  },
  {
    title: "Billing",
    href: "/user/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/user/settings",
    icon: Settings,
  },
];

export const secondaryNavigation = [
  {
    title: "Help",
    href: "/user/help",
    icon: HelpCircle,
  },
];