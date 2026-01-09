import { Loader2 } from "lucide-react";

interface PageLoadingProps {
  message?: string;
  className?: string;
}

export default function PageLoading({
  message = "Loading...",
  className = "flex items-center justify-center min-h-[400px]",
}: PageLoadingProps) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
