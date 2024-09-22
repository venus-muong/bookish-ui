import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ url, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [src, setSrc] = useState('');
  const imgRef = useRef(null);

  useEffect(() => {
    const getPicsum = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setSrc(json.download_url);
    }
    getPicsum();
  }, []);

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
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      loading="lazy"
      {...props}
      style={{ ...props.style,  minHeight: '200px', background: '#f0f0f0' }}
    />
  );
};

export default LazyImage;
