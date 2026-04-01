import { GlassCard } from "../glass-card"
import { NavLink } from "../nav-link"
import { ThemeSwitch } from "../theme-switch"
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <>
      <GlassCard className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>Dominik Leszczyński</h1>

          <nav className={styles.headerNav}>
            <NavLink href="#" label="Experience" />
            <NavLink href="#" label="Education" />
            <NavLink href="#" label="Contact" />
            <ThemeSwitch />
          </nav>
        </div>
      </GlassCard>
    </>
  )
}
