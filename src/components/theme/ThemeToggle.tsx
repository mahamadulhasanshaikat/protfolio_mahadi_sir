// src/components/ThemeToggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />;
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
      title={`Current: ${theme} (Click to toggle)`}
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
      {theme === 'dark' && <Moon className="w-4 h-4 text-blue-400" />}
      {theme === 'system' && <Monitor className="w-4 h-4 text-emerald-500" />}
      <span className="text-[10px] font-mono capitalize hidden sm:inline">
        {theme}
      </span>
    </button>
  );
}