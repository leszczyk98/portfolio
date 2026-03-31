import { ReactNode } from "react"
import styles from "./timeline.module.scss"

export interface TimelineProps {
  startYear: number
  endYear: number
  items: {
    startDate: Date
    endDate: Date
    content: ReactNode
  }[]
}

export const Timeline = ({ startYear, endYear, items }: TimelineProps) => {
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index,
  )

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineLine}></div>
    </div>
  )
}
