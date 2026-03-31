import { NavLink } from "../nav-link"
import { ThemeSwitch } from "../theme-switch"
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <svg width="0" height="0">
          <filter id="liquid-glass">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="2"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.007;0.009;0.007"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <div className={styles.headerDistortion}></div>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>Dominik Leszczyński</h1>

          <nav className={styles.headerNav}>
            <NavLink href="#" label="Experience" />
            <NavLink href="#" label="Education" />
            <NavLink href="#" label="Contact" />
            <ThemeSwitch />
          </nav>
        </div>
      </header>
    </>
  )
}
