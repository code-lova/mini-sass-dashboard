import  Billing from "@/components/billing/Billing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS - Billing information",
  description: "A minimal production-grade SaaS showing billing/subscription plans",
};


export const page = () => {
  return <Billing />;
};
