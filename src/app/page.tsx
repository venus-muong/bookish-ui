"use client";

import styles from "./page.module.css";
import placeholder from "./icons/image-placeholder.png";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Create Vision Board</h1>
      <div className={styles["add-container"]}>
        <p>+ title</p>
        <p>+ images</p>
      </div>
      <div className={styles["vision-image"]}>
        {Array(4).fill(undefined).map((_, i) => (
          <Image
            src={placeholder.src}
            key={i}
            width={200}
            height={225}
            alt="placeholder"
          />
        ))}
      </div>
    </div>
  );
}
