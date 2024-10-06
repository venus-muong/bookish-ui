import { useState } from 'react'
import LazyImage from './common/LazyImage';
import styles from './stylesheets/ImageModal.module.css';

function ImageModal({ setImportImages, images, setImages }) {
    const [selectedPicsum, setSelectedPicsum] = useState<number[]>([]);
    return (
        <>
            <div className={styles.modal}>
                <p className={styles.desc}>Click image(s) to select {selectedPicsum.length > 0 ? `(${selectedPicsum.length})` : ''}</p>
                <div className={styles['modal-container']} id={styles.scrollbar}>
                    <div className={styles.pictures}>
                        {Array(200).fill(undefined).map((_, i) => (
                            <span key={i} className={styles.picture}>
                                <LazyImage
                                    onClick={() => {
                                        if (!selectedPicsum.includes(i)) {
                                            const newArr = [...selectedPicsum, i];
                                            setSelectedPicsum(newArr);
                                        } else {
                                            const newArr = selectedPicsum.filter((pic) => pic !== i);
                                            setSelectedPicsum(newArr);
                                        }
                                    }}
                                    key={i}
                                    url={`https://picsum.photos/seed/${i + 1}/info`}
                                    alt={''}
                                    style={{
                                        border: selectedPicsum.includes(i) ? '0.2rem solid black' : '0.2rem solid white',
                                        borderRadius: '0.1rem',
                                        width: '150px',
                                        height: '200px'
                                    }}
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
    )
}

export default ImageModal;