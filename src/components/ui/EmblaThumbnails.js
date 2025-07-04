"use client";

import React, { useEffect, useCallback, useState } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import styles from '@/styles/EmblaThumbnails.module.css'
import Image from 'next/image';

const EmblaThumbnails = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [thumbRef, thumbApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onThumbClick = useCallback((index) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect(); // initialize
    }, [emblaApi]);

    return (
        <div className={styles.container}>
            {/* Main Carousel */}
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((src, index) => (
                        <div className={styles.embla__slide} key={index} style={{ position: 'relative', width: '577px', height: '427px' }}>
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Thumbnails */}
            <div className={styles.emblaThumb} ref={thumbRef}>
                <div className={styles.embla__containerThumb}>
                    {slides.map((src, index) => (
                        <button
                            key={index}
                            className={`${styles.embla__slideThumb} ${selectedIndex === index ? styles.selectedThumb : ''
                                }`}
                            onClick={() => onThumbClick(index)}
                        >
                            <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaThumbnails;