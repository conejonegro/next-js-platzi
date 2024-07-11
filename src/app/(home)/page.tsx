import Image from "next/image";
import styles from "./page.module.css";

import { Description, Hero } from "app/components/Home";
import { LearnMore } from "app/components/LearnMoreButton/LearnMore";


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

      <Description />
      <Hero />
      <LearnMore />

    </main>
  );
}