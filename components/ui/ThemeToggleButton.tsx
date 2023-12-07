import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const themeIconClassName = "h-4 transition-all";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select
      defaultValue={resolvedTheme}
      onValueChange={(theme) => setTheme(theme)}
    >
      <SelectTrigger className="w-10 border-none">
        <SelectValue aria-label={resolvedTheme}>
          {["dark", "system"].includes(resolvedTheme) ? (
            <Moon className={themeIconClassName} />
          ) : (
            <Sun className={themeIconClassName} />
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
