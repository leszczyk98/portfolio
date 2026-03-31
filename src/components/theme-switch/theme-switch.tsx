"use client"

import { AnimatePresence, motion } from "motion/react"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"
import styles from "./theme-switch.module.scss"

export const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className={styles.themeSwitch}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <AnimatePresence>
        {theme === "light" ? (
          <ThemeSwitchIcon type="light" />
        ) : (
          <ThemeSwitchIcon type="dark" />
        )}
      </AnimatePresence>
    </button>
  )
}

const ThemeSwitchIcon = ({ type }: { type: "light" | "dark" }) => {
  return (
    <motion.span
      className={styles.themeSwitchIcon}
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      exit={{ rotate: 0 }}
      transition={{ duration: 0.2 }}
      key={type}
    >
      {type === "light" ? <FaSun /> : <FaMoon />}
    </motion.span>
  )
}
