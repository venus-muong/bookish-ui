"use client";
import { useState } from 'react';
import ImageModal from './ImageModal';

// for photo layout: https://stackoverflow.com/a/39246470

import styles from "./page.module.css";
import LazyImage from "./common/LazyImage";

export default function Home() {
  const [importImages, setImportImages] = useState<boolean>(false);
  const [images, setImages] = useState<number[]>([]);
  const [title, setTitle] = useState<string>('');

  return (
    <div className={styles.page} style={{backgroundColor: importImages ? 'rgba(0, 0, 0, 0.2)' : ''}}>
      {/* <h1 className={styles.title}>Enter Title Here</h1> */}
      <input
        type="text"
        className={styles.title}
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles["add-container"]}>
        <p 
          onClick={ () => {
              setImportImages(true);
          }}
        >Add Images</p>
        <p>
           Create Vision Board
        </p>
      </div>
      {
        importImages && (
          <ImageModal 
              setImportImages={setImportImages}
              images={images}
              setImages={setImages}
          />
        )
      }
      <div className={styles["vision-image"]}>
        {images.map((img, i) => (
          <LazyImage
            key={i}
            url={`https://picsum.photos/seed/${img + 1}/info`}
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
