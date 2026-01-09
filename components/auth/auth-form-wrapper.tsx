"use client";

import { type ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface AuthFormWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  footer: {
    text: string;
    linkText: string;
    href: string;
  };
}

export function AuthFormWrapper({
  children,
  title,
  description,
  footer,
}: AuthFormWrapperProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            {footer.text}{" "}
            <Link
              href={footer.href}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {footer.linkText}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
