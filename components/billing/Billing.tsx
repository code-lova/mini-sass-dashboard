import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, Zap } from "lucide-react";
import { plans } from "@/constants";

export default function Billing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and payment methods
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Plan
          </CardTitle>
          <CardDescription>
            You are currently on the <strong>Pro</strong> plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-3xl font-bold">
                $29
                <span className="text-lg font-normal text-muted-foreground">
                  /month
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Next billing date: February 1, 2026
              </p>
            </div>
            <Button variant="outline">Manage Subscription</Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-lg font-semibold mb-4">Available Plans</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.current ? "border-primary" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.current && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      <Zap className="h-3 w-3" />
                      Current
                    </span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-3xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.current ? "outline" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
