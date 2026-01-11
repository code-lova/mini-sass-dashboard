"use client";

import { useEffect } from "react";
import {
  ErrorBoundary,
  DefaultErrorFallback,
} from "@/components/error";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We can also log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorBoundary
      fallback={
        <DefaultErrorFallback
          error={error}
          onReset={reset}
          showDetails={process.env.NODE_ENV === "development"}
        />
      }
    >
      <div className="flex flex-col items-center justify-center min-h-100 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground mt-2">
            An error occurred while loading this page.
          </p>
        </div>
        <button
          onClick={reset}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </ErrorBoundary>
  );
}
