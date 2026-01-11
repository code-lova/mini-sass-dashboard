import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DASHBOARD_STATS } from "@/constants";
import { useSimulatedDelay } from "@/hooks/use-simulated-delay";
import { StatsCardsSkeleton } from "./skeletons/StatsCardsSkeleton";
import { ErrorBoundary } from "@/components/error";

export function StatsCards() {
  const isLoading = useSimulatedDelay(2000); // 2 seconds delay

  if (isLoading) {
    return <StatsCardsSkeleton />;
  }

  return (
    <ErrorBoundary
      context="stats"
      onError={(error) => {
        console.error("StatsCards Error:", error);
      }}
      onRetry={() => window.location.reload()}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <Card key={stat.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs flex items-center gap-1 ${
                  stat.trend === "up"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ErrorBoundary>
  );
}
