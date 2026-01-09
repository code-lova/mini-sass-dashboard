import React from "react";
import Help from "@/components/help/Help";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Support/faq",
  description: "A minimal production-grade SaaS Support and help section",
};

export const page = () => {
  return <Help />;
};
