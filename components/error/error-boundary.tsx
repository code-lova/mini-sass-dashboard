"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  context?: "chart" | "card" | "stats" | "page";
  showDetails?: boolean;
  onRetry?: () => void;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <DefaultErrorFallback
          error={this.state.error}
          onReset={this.handleReset}
          context={this.props.context}
          showDetails={this.props.showDetails}
          onRetry={this.props.onRetry}
        />
      );
    }

    return this.props.children;
  }
}

interface DefaultErrorFallbackProps {
  error?: Error;
  onReset: () => void;
  context?: "chart" | "card" | "stats" | "page";
  showDetails?: boolean;
  onRetry?: () => void;
}

export function DefaultErrorFallback({
  error,
  onReset,
  context = "page",
  showDetails,
  onRetry,
}: DefaultErrorFallbackProps) {
  const getContextConfig = () => {
    switch (context) {
      case "chart":
        return {
          icon: BarChart3,
          title: "Chart Unavailable",
          message: "Unable to load chart data. Please try again.",
          className: "lg:col-span-2 h-64",
          iconSize: "h-6 w-6",
          titleSize: "text-lg",
        };
      case "card":
        return {
          icon: AlertTriangle,
          title: "Data Unavailable",
          message: "Unable to load data. Please try again.",
          className: "",
          iconSize: "h-4 w-4",
          titleSize: "text-sm",
        };
      case "stats":
        return {
          icon: AlertTriangle,
          title: "Failed to load",
          message: "",
          className: "",
          iconSize: "h-4 w-4",
          titleSize: "text-xs",
        };
      default:
        return {
          icon: AlertTriangle,
          title: "Something went wrong!",
          message: "An unexpected error occurred. Please try again.",
          className: "w-full max-w-md mx-auto",
          iconSize: "h-6 w-6",
          titleSize: "text-xl",
        };
    }
  };

  const config = getContextConfig();
  const Icon = config.icon;

  const handleRetry = onRetry || onReset;

  if (context === "stats") {
    // Special layout for stats cards
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted rounded animate-pulse" />
        </CardHeader>
        <CardContent>
          <div className="h-8 w-20 bg-muted rounded animate-pulse mb-1" />
          <div className="h-3 w-16 bg-muted rounded animate-pulse" />
          <div className="mt-3 text-center">
            <p className="text-xs text-destructive mb-2">{config.title}</p>
            <Button variant="outline" size="sm" onClick={handleRetry}>
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={config.className}>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
          <Icon className={`${config.iconSize} text-destructive`} />
        </div>
        <CardTitle className={`${config.titleSize} text-destructive`}>
          {config.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {config.message && (
          <p className="text-muted-foreground">{config.message}</p>
        )}

        {showDetails && error && (
          <details className="text-left bg-muted p-3 rounded-md text-sm">
            <summary className="cursor-pointer font-medium">
              Error Details
            </summary>
            <pre className="mt-2 whitespace-pre-wrap text-xs">
              {error.message}
            </pre>
          </details>
        )}

        <Button onClick={handleRetry} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
}
