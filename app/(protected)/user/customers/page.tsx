import React from "react";
import Customers from "@/components/customers/Customers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS - Customers information",
  description:
    "A minimal production-grade SaaS showing Customers statistics",
};

const page = () => {
  return <Customers />;
};

export default page;
