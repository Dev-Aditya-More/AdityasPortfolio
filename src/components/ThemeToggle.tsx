
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <Toggle 
      aria-label="Toggle dark mode" 
      pressed={isDarkMode}
      onPressedChange={toggleTheme}
      className="rounded-full p-2"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Toggle>
  );
};

export default ThemeToggle;
