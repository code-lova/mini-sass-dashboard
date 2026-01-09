import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          SaaS Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          A minimal, production-grade dashboard with authentication, metrics, 
          and settings management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">Create account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
