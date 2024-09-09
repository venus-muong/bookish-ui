"use client";

// for photo layout: https://stackoverflow.com/a/39246470

import styles from "./page.module.css";
import placeholder from "./icons/image-placeholder.png";
import LazyImage from "./common/LazyImage";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Create Vision Board</h1>
      <div className={styles["add-container"]}>
        <p>+ title</p>
        <p 
          onClick={ () => {
              // imageModal
          }}
        >+ images</p>
      </div>
      <div className={styles["vision-image"]}>
        {Array(20).fill(undefined).map((_, i) => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/200/300?random=${i}`}
            alt={`random ${i}`}
          />
        ))}
        <div className={styles["add-image"]}>
          <LazyImage
            src={placeholder.src}
            width={200}
            height={300}
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
}
