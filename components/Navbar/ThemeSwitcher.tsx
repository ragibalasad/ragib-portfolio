"use client";

import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher({ className = "" }: ThemeSwitcherProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check the saved theme preference on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    } else {
      // If no preference is saved, use the system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.remove(isDarkMode ? "dark" : "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className={className}>
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
