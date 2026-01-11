import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REVENUE_CHART_DATA } from "@/constants";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSimulatedDelay } from "@/hooks/use-simulated-delay";
import { RevenueChartSkeleton } from "./skeletons/RevenueChartSkeleton";
import { ErrorBoundary } from "@/components/error";

export function RevenueChart() {
  const isLoading = useSimulatedDelay(3000); // 3 seconds delay

  if (isLoading) {
    return <RevenueChartSkeleton />;
  }

  return (
    <ErrorBoundary
      context="chart"
      onError={(error) => {
        // Log to error reporting service
        console.error("RevenueChart Error:", error);
      }}
      onRetry={() => window.location.reload()}
    >
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="month"
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => [
                    value ? `$${value.toLocaleString()}` : "$0",
                    "Revenue",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
}
