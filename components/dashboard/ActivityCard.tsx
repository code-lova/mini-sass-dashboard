import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RECENT_ACTIVITY } from "@/constants";
import { useSimulatedDelay } from "@/hooks/use-simulated-delay";
import { ActivityCardSkeleton } from "./skeletons/ActivityCardSkeleton";
import { ErrorBoundary } from "@/components/error";

export function ActivityCard() {
  const isLoading = useSimulatedDelay(1000); // 1 second delay

  if (isLoading) {
    return <ActivityCardSkeleton />;
  }

  return (
    <ErrorBoundary
      context="card"
      onError={(error) => {
        console.error("ActivityCard Error:", error);
      }}
      onRetry={() => window.location.reload()}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {RECENT_ACTIVITY.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.message}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
}
