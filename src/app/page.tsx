'use client';
import { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import { get, post, put } from './fetch/visionboard';
import styles from './page.module.css';
import LazyImage from './common/LazyImage';
// for photo layout: https://stackoverflow.com/a/39246470

export default function Home() {
  const [importImages, setImportImages] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await get();
      if (res) {
        setId(res.data.id);
        setTitle(res.data.title);
        setImages(res.data.images);
      }
    };
    fetchImages();
  }, []);

  return (
    <div
      className={`${styles.page} ${importImages ? styles['dimmed-background'] : ''}`}
    >
      <input
        type="text"
        className={styles.title}
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles['add-container']}>
        <p
          onClick={() => {
            setImportImages(true);
          }}
        >
          Add Images
        </p>
        <p
          onClick={() => {
            setEdit(!edit);
          }}
        >
          {edit ? 'Finish Edit' : 'Edit Board'}
        </p>
        <p
          onClick={async () => {
            if (!id) {
              await post({ title, images });
              return;
            }
            await put({ id, title, images });
          }}
        >
          Save Board
        </p>
      </div>
      {importImages && (
        <ImageModal
          setImportImages={setImportImages}
          images={images}
          setImages={setImages}
        />
      )}
      <div className={styles['vision-image']}>
        {images.map((img, i) => (
          <LazyImage
            key={img + `${i}`}
            i={i}
            url={img}
            alt={''}
            edit={edit}
            images={images}
            setImages={setImages}
            parent={'board'}
          />
        ))}
      </div>
    </div>
  );
}
