import { Header } from "@/components/header"
import styles from "./page.module.scss"
import cn from "classnames"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <h1>Colors test page</h1>
        <div className={styles.colorBoxContainer}>
          <div className={cn(styles.colorBox, styles.colorBoxPrimary)}>
            BG Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxSecondary)}>
            BG Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTertiary)}>
            BG Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextPrimary)}>
            Text Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextSecondary)}>
            Text Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextTertiary)}>
            Text Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentPrimary)}>
            Accent Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentSecondary)}>
            Accent Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxPrimary)}>
            BG Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxSecondary)}>
            BG Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTertiary)}>
            BG Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextPrimary)}>
            Text Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextSecondary)}>
            Text Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextTertiary)}>
            Text Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentPrimary)}>
            Accent Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentSecondary)}>
            Accent Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxPrimary)}>
            BG Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxSecondary)}>
            BG Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTertiary)}>
            BG Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextPrimary)}>
            Text Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextSecondary)}>
            Text Secondary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxTextTertiary)}>
            Text Tertiary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentPrimary)}>
            Accent Primary
          </div>
          <div className={cn(styles.colorBox, styles.colorBoxAccentSecondary)}>
            Accent Secondary
          </div>
        </div>
      </main>
    </div>
  )
}
