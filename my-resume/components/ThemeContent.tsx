"use client";

import { useThemeContext } from "@/app/providers";
import { useEffect, useState } from "react";

export default function ThemeContent() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
      {theme === "dark" ? (
        <div>
          <p className="text-blue-900 dark:text-blue-100 font-semibold">🌙 Dark Mode Activated</p>
          <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
            Welcome to dark mode! This theme is easier on the eyes during nighttime browsing.
          </p>
        </div>
      ) : (
        <div>
          <p className="text-blue-900 dark:text-blue-100 font-semibold">☀️ Light Mode Active</p>
          <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
            You're viewing the classic light theme. Perfect for daytime reading and printing.
          </p>
        </div>
      )}
    </div>
  );
}
