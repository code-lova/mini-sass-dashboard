import React from "react";
import  Analytics from "@/components/analytics/Analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS - Analytics data",
  description: "A minimal production-grade SaaS analytics page",
};

const page = () => {
  return <Analytics />;
};

export default page;
