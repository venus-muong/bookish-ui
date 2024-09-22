"use client";
import { useState } from 'react';
import ImageModal from './ImageModal';

// for photo layout: https://stackoverflow.com/a/39246470

import styles from "./page.module.css";
import placeholder from "./icons/image-placeholder.png";
import LazyImage from "./common/LazyImage";

export default function Home() {
  const [importImages, setImportImages] = useState<boolean>(false);
  const [images, setImages] = useState<number[]>([]);

  return (
    <div className={styles.page} style={{backgroundColor: importImages ? 'rgba(0, 0, 0, 0.2)' : ''}}>
      <h1 className={styles.title}>Create Vision Board</h1>
      <div className={styles["add-container"]}>
        <p>Add Title</p>
        <p 
          onClick={ () => {
              setImportImages(true);
          }}
        >Add Images</p>
      </div>
      {
        importImages && (
          <ImageModal 
              setImportImages={setImportImages}
              setImages={setImages}
          />
        )
      }
      <div className={styles["vision-image"]}>
        {images.map((img, i) => (
          <LazyImage
            key={i}
            url={`https://picsum.photos/seed/${img + 1}/info`}
            // src={`https://picsum.photos/200/300?random=${i}`}
            alt={''}
            style={{
              width: '220px',
              height: '300px'
          }}
          />
        ))}
      </div>
    </div>
  );
}
