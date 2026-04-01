import cn from "classnames"
import { PropsWithChildren } from "react"
import styles from "./glass-card.module.scss"

export interface GlassCardProps extends PropsWithChildren {
  className?: string
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div className={cn(styles.glassCard, className)}>
      <div className={styles.glassCardDistortion}></div>
      <div className={styles.glassCardContent}>{children}</div>
    </div>
  )
}
