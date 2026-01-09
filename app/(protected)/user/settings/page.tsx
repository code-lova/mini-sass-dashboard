import React from "react";
import { Metadata } from "next";
import Settings from "@/components/settings/Settings";

export const metadata: Metadata = {
  title: "SaaS Setting",
  description: "A minimal production-grade SaaS app Settings ",
};

export const page = () => {
  return <Settings />;
};
