import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';

interface LazyImageProps {
  i: number;
  url: string;
  alt: string;
  edit: boolean;
  images: string[];
  setImages: (images: string[]) => void;
  parent: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  i,
  url,
  alt,
  edit,
  images,
  setImages,
  parent,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [src, setSrc] = useState('');
  const imgRef = useRef(null);

  useEffect(() => {
    const getPicsum = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setSrc(json.download_url);
    };
    getPicsum();
  }, [url]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      {parent === 'modal' ? (
        <img
          ref={imgRef}
          src={isVisible ? src : ''}
          alt={alt}
          loading="lazy"
          {...props}
          className={
            edit ? styles['editable-image'] : styles['non-editable-image']
          }
          width={100}
          height={100}
        />
      ) : (
        <div className={styles['image-container']}>
          <img
            ref={imgRef}
            src={isVisible ? src : ''}
            alt={alt}
            loading="lazy"
            {...props}
            className={
              edit ? styles['editable-image'] : styles['non-editable-image']
            }
            width={100}
            height={100}
          />
          {edit && (
            <button
              className={edit ? styles['remove-image'] : ''}
              onClick={() => {
                const newArr = images.filter((_, index: number) => index !== i);
                setImages(newArr);
              }}
            >
              X
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default LazyImage;
