import { useState } from 'react'
import LazyImage from './common/LazyImage';
import styles from './stylesheets/ImageModal.module.css';

function ImageModal({ setImportImages, setImages }) {
    const [selectedPicsum, setSelectedPicsum] = useState<number[]>([]);
    return (
        <>
            <div style={{position: 'fixed', top: '20%', backgroundColor: 'white', borderRadius: '1rem', borderStyle: 'solid', borderColor: 'gray', width: '40rem', height: '23rem', zIndex: '20' }}>
                <p style={{textAlign: 'center', color:'black'}}>Click image(s) to select {selectedPicsum.length > 0 ? `(${selectedPicsum.length})` : ''}</p>
                <div style={{borderWidth: '0.1rem', marginLeft: '2.5rem', marginBottom: '1rem', width: '35rem', height: '15rem', borderStyle:'solid', borderColor: 'gray', overflowY: 'auto'}}>
                    <div style={{marginLeft:'2.5rem', marginTop: '0.5rem'}}>
                        {Array(200).fill(undefined).map((_, i) => (
                            <span key={i} style={{margin: '0.1rem'}}>
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
                                    // src={`https://picsum.photos/150/200/?random=${i}`}
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <button
                        className={styles['button-6']}
                        onClick={() => setImportImages(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles['button-6']}
                        onClick={() => {
                            setImages(selectedPicsum);
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