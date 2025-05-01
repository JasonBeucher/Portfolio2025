'use client'
import SunIcon from "@/assets/icons/sun2.svg"
import MoonIcon from "@/assets/icons/moon.svg"
import { useTheme } from "@/hooks/useTheme"

export const HeroSun = () => {
  const { theme, mounted } = useTheme()

  if (!mounted) return null

  return (
    <>
      <div className="absolute left-1/2 -top-8 animate-slide-down dark:hidden z-10">
        <div className="animate-spin-slow">
          <SunIcon className="size-[500px]" />
        </div>
      </div>
      <div className="absolute left-1/2 -top-8 animate-slide-down hidden dark:block z-10">
        <div className="animate-spin-slow">
          <MoonIcon className="size-[450px]" />
        </div>
      </div>
    </>
  )
}