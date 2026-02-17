import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true; // Default to dark on server/initial render
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-accent hover:text-accent-hover hover:bg-accent/10 transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
