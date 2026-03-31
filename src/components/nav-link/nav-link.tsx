import Link from "next/link"
import { ReactNode } from "react"
import styles from "./nav-link.module.scss"

export interface NavLinkProps {
  href: string
  label: string
  icon?: ReactNode
}

export const NavLink = ({ href, label, icon }: NavLinkProps) => {
  return (
    <Link href={href} className={styles.navLink}>
      {icon && <span className={styles.navLinkIcon}>{icon}</span>}
      <span className={styles.navLinkLabel}>{label}</span>
    </Link>
  )
}
