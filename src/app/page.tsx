import Image from "next/image";
import styles from "./page.module.css";
import { LearnMore } from "../components/LearnMoreButton/LearnMore";
import { Description, Hero } from "../components/Home";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Hero />
      <Description />
      <LearnMore />

    </main>
  );
}
