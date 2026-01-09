"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Moon, Sun, Monitor, Check, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { updateProfile } from "firebase/auth";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export default function Settings() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
  }, [user?.displayName]);

  const handleSaveProfile = async () => {
    if (!user) return;
    if (!name.trim()) {
      setError("Display name is required");
      return;
    }

    setIsSaving(true);
    setError(null);
    setSaveSuccess(false);

    try {
      await updateProfile(user, {
        displayName: name.trim(),
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {saveSuccess && (
            <div className="rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Check className="h-4 w-4" />
              Profile updated successfully!
            </div>
          )}
          {error && (
            <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user?.email || ""}
              disabled
              className="bg-muted"
            />
            <p className="text-xs text-muted-foreground">
              Email cannot be changed
            </p>
          </div>
          <Button
            onClick={handleSaveProfile}
            disabled={isSaving || !name.trim()}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5" />
            Appearance
          </CardTitle>
          <CardDescription>
            Customize how the app looks. Theme preference is saved
            automatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {mounted &&
              themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all hover:bg-muted",
                    theme === t.value
                      ? "border-primary bg-primary/5"
                      : "border-transparent bg-muted/50"
                  )}
                >
                  <t.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{t.label}</span>
                  {theme === t.value && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
