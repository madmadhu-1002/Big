"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import BuiFocCard from "../ui/BuiFocCard";
import DotIndicators from "../ui/DotIndicators";

const businessData = [
    {
        id: 1,
        title: "Food",
        description:
            "Delivering quality and innovation, Bahwan's food ventures focus on importing, distributing, and marketing premium food products.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L11.91 12.25L15.83 8.33L17.5 10H17V12C17 13.1 16.1 14 15 14S13 13.1 13 12V9C13 7.9 13.9 7 15 7H21ZM7.91 10.09L6.5 11.5L11 16L21 6L19.59 4.59L11 13.18L7.91 10.09Z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Joint Ventures",
        description:
            "Strategic alliances with international companies strengthen Bahwan Group's presence in key markets. These partnerships span sectors.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H20V19ZM20 15H12V13H20V15ZM20 11H12V9H20V11Z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Automobiles",
        description:
            "As a leading automotive distributor, Bahwan represents globally renowned vehicle brands. Their network ensures strong market coverage, after-sales service.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
                <path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Rental",
        description:
            "Bahwan provides comprehensive rental solutions for equipment, vehicles, and tools. With flexible terms and reliable support, it's a trusted partner.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
                <path d="M7,14A3,3 0 0,1 10,11A3,3 0 0,1 13,14A3,3 0 0,1 10,17A3,3 0 0,1 7,14M10,15.5A1.5,1.5 0 0,0 11.5,14A1.5,1.5 0 0,0 10,12.5A1.5,1.5 0 0,0 8.5,14A1.5,1.5 0 0,0 10,15.5M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,3.18L5,6.3V11.22C5,15.54 8.82,20 12,20C15.18,20 19,15.54 19,11.22V6.3L12,3.18Z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: "Health",
        description:
            "Bahwan's healthcare ventures focus on medical equipment, pharmaceuticals, and hospital solutions. The group supports advanced care delivery.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
            </svg>
        ),
    },
]

const BuisnessFocus = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 100000 })]
    );

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect(); // Initialize on mount
    }, [emblaApi]);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column py-4">
            <h2 className="w-50 text-center text-primary fs-1">Business Focus</h2>
            <h5 className="w-75 text-center">
                Bahwan International Group drives growth across automotive, technology,
                infrastructure, and services, with a focus on innovation, quality, and
                customer-centric solutions to create lasting value and global impact.
            </h5>

            <div className="embla w-100 mt-5" ref={emblaRef}>
                <div className="embla__container d-flex">
                    {businessData.map((card, index) => {
                        const position = index - selectedIndex;
                        const isCenter = position === 0;

                        return (
                            <div
                                key={card.id}
                                className="embla__slide d-flex justify-content-center align-items-center"
                                style={{
                                    flex: "0 0 33.333%",
                                    padding: "0 1rem",
                                    opacity: isCenter ? 1 : 0.4,
                                    transition: "opacity 0.3s ease",
                                }}
                            >

                                <BuiFocCard
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    icon={card.icon}
                                    isCenter={isCenter}
                                    position={position}
                                />
                            </div>
                        );
                    })}

                </div>
            </div>

            <div className="mt-3 w-100 px-4 d-flex justify-content-between gap-2">
                <button className="btn btn-outline-primary" onClick={scrollPrev}>
                    Prev
                </button>
                <DotIndicators count={businessData.length} activeIndex={selectedIndex} />
                <button className="btn btn-outline-primary" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default BuisnessFocus;
