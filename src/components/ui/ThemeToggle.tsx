"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
