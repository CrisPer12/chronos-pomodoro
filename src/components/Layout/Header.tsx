import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface-page/70 backdrop-blur-xl border-b border-border-default/50 dark:bg-surface-page/50 px-6 py-4 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-action-primary flex items-center justify-center text-white shadow-md">
            <span className="font-bold text-lg leading-none">C</span>
          </div>
          <h1 className="text-xl font-bold font-display tracking-tight text-text-primary">
            Chronos
          </h1>
        </div>

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <Input
            type="text"
            placeholder="Buscar"
            className="pl-10 pr-4 py-2 w-64"
          />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button variant="icon" size="icon">
            <Bell size={20} className="text-text-secondary" />
          </Button>

          <div className="w-10 h-10 rounded-full bg-action-primary flex items-center justify-center text-text-on-primary font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
};
