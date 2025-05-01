'use client'
import { useTheme } from '@/hooks/useTheme'
import MoonIcon from '@/assets/icons/moon-switch.svg'
import SunIcon from '@/assets/icons/sun-switch.svg'

export const ThemeSwitch = () => {
  const { theme, toggleTheme, mounted } = useTheme()

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="fixed top-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur">
        <span className="size-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 md:top-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-sky-600/10 dark:bg-white/10 backdrop-blur"
    >
      {theme === 'dark' ? (
        <MoonIcon className="size-5" />
      ) : (
        <SunIcon className="size-5" />
      )}
    </button>
  )
}