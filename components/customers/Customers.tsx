"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Search, Plus, MoreHorizontal } from "lucide-react";
import { customers } from "@/constants";
import { useSimulatedDelay } from "@/hooks/use-simulated-delay";
import PageLoading from "@/components/ui/page-loading";

export default function Customers() {
  const isLoading = useSimulatedDelay(1200); // 1.2 second delay

  if (isLoading) {
    return <PageLoading message="Loading customers..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            Manage your customer base and subscriptions
          </p>
        </div>
        <Button className="gap-2 w-fit">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              All Customers
            </CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden sm:table-cell">
                    Email
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Plan
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b last:border-0">
                    <td className="py-3 px-2 font-medium">{customer.name}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">
                      {customer.email}
                    </td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {customer.plan}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
