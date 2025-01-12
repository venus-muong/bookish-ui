import { useState } from 'react';
import LazyImage from './common/LazyImage';
import styles from './stylesheets/ImageModal.module.css';

interface ImageModalProps {
  setImportImages: (value: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  setImportImages,
  images,
  setImages,
}) => {
  const [selectedPicsum, setSelectedPicsum] = useState<string[]>([]);
  return (
    <>
      <div className={styles.modal}>
        <p className={styles.desc}>
          Click image(s) to select{' '}
          {selectedPicsum.length > 0 ? `(${selectedPicsum.length})` : ''}
        </p>
        <div className={styles['modal-container']} id={styles.scrollbar}>
          <div className={styles.pictures}>
            {Array(200)
              .fill(undefined)
              .map((_, i) => (
                <span key={i} className={styles.picture}>
                  <LazyImage
                    onClick={() => {
                      const url = `https://picsum.photos/seed/${i + 1}/info`;
                      if (!selectedPicsum.includes(url)) {
                        const newArr = [...selectedPicsum, url];
                        setSelectedPicsum(newArr);
                      } else {
                        const newArr = selectedPicsum.filter(
                          (pic) => pic !== url
                        );
                        setSelectedPicsum(newArr);
                      }
                    }}
                    key={i}
                    i={i}
                    url={`https://picsum.photos/seed/${i + 1}/info`}
                    alt={''}
                    style={{
                      border: selectedPicsum.includes(
                        `https://picsum.photos/seed/${i + 1}/info`
                      )
                        ? '0.2rem solid black'
                        : '0.2rem solid white',
                      borderRadius: '0.1rem',
                      width: '150px',
                      height: '200px',
                    }}
                    images={images}
                    setImages={setImages}
                    edit={false}
                    parent={'modal'}
                  />
                </span>
              ))}
          </div>
        </div>
        <div className={styles['button-container']}>
          <button
            className={styles['button-6']}
            onClick={() => setImportImages(false)}
          >
            Cancel
          </button>
          <button
            className={styles['button-6']}
            onClick={() => {
              const newArr = images.concat(selectedPicsum);
              setImages(newArr);
              setImportImages(false);
            }}
          >
            Add Images
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
