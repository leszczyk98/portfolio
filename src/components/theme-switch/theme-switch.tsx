"use client"

import { AnimatePresence, motion } from "motion/react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styles from "./theme-switch.module.scss"

function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useMounted()

  const isLight = resolvedTheme === "light"

  const buttonLabel = mounted
    ? isLight
      ? "Switch to dark mode"
      : "Switch to light mode"
    : "Theme"

  return (
    <button
      type="button"
      className={styles.themeSwitch}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={buttonLabel}
      disabled={!mounted}
    >
      {!mounted ? (
        <span className={styles.themeSwitchPlaceholder} aria-hidden>
          <FaSun className={styles.themeSwitchPlaceholderSun} />
          <FaMoon className={styles.themeSwitchPlaceholderMoon} />
        </span>
      ) : (
        <AnimatePresence initial={false} mode="wait">
          {isLight ? (
            <ThemeSwitchIcon key="light" type="light" />
          ) : (
            <ThemeSwitchIcon key="dark" type="dark" />
          )}
        </AnimatePresence>
      )}
    </button>
  )
}

const ThemeSwitchIcon = ({ type }: { type: "light" | "dark" }) => {
  return (
    <motion.span
      className={styles.themeSwitchIcon}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: -360, opacity: 1 }}
      exit={{ rotate: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {type === "light" ? <FaSun /> : <FaMoon />}
    </motion.span>
  )
}
