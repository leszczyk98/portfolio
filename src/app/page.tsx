import { GlassCard } from "@/components/glass-card"
import { Header } from "@/components/header"
import cn from "classnames"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <h1 style={{ textAlign: "center" }}>Test page</h1>
      <div className={styles.homeContainer}>
        <ul className={styles.verticalList}>
          <h2 style={{ textAlign: "center" }}>Colors</h2>
          <li className={cn(styles.colorBox, styles.colorBoxPrimary)}>
            BG Primary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxSecondary)}>
            BG Secondary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxTertiary)}>
            BG Tertiary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxTextPrimary)}>
            Text Primary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxTextSecondary)}>
            Text Secondary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxTextTertiary)}>
            Text Tertiary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxAccentPrimary)}>
            Accent Primary
          </li>
          <li className={cn(styles.colorBox, styles.colorBoxAccentSecondary)}>
            Accent Secondary
          </li>
        </ul>
        <ul className={styles.verticalList}>
          <h2 style={{ textAlign: "center" }}>Cards</h2>
          {Array.from({ length: 15 }).map((_, index) => (
            <li key={index}>
              <GlassCard>
                <h2>Glass Card</h2>
                <p>
                  This is a glass card. It is a card that is made of glass. It
                  is a card that is made of glass. It is a card that is made of
                  glass. It is a card that is made of glass. It is a card that
                  is made of glass. It is a card that is made of glass. It is a
                  card that is made of glass.
                </p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
