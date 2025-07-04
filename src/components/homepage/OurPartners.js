"use client"

import { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import styles from "@/styles/OurPartners.module.css"

const partnersData = [
    {
        id: 1,
        name: "Hyundai",
        logo: "/assets/partners/image 34.png",
    },
    {
        id: 2,
        name: "ABB",
        logo: "/assets/partners/Picture1.png",
    },
    {
        id: 3,
        name: "Hitachi",
        logo: "/assets/partners/Picture2.png",
    },
    {
        id: 4,
        name: "IQantar",
        logo: "/assets/partners/Picture3.png",
    },
    {
        id: 5,
        name: "GreenTech",
        logo: "/assets/partners/Picture4.png",
    },
    {
        id: 6,
        name: "iPark",
        logo: "/assets/partners/Picture5.png",
    },
    {
        id: 7,
        name: "ADAD International",
        logo: "/assets/partners/Picture6.png",
    },
    {
        id: 8,
        name: "Wipro",
        logo: "/assets/partners/Picture7.png",
    },
    {
        id: 9,
        name: "Page Middle East",
        logo: "/assets/partners/Picture8.png",
    },
    {
        id: 10,
        name: "ADB Safegate",
        logo: "/assets/partners/Picture10.png",
    },
    {
        id: 11,
        name: "Smit Lamnalco",
        logo: "/assets/partners/Picture11.png",
    },
    {
        id: 12,
        name: "Vanderlande",
        logo: "/assets/partners/Picture12.png",
    },
    {
        id: 13,
        name: "Rosenbauer",
        logo: "/assets/partners/Picture14.png",
    },
    {
        id: 14,
        name: "Minimax",
        logo: "/assets/partners/Picture15.png",
    },
    {
        id: 15,
        name: "Blue Aqua",
        logo: "/assets/partners/Picture16.png",
    },
    {
        id: 16,
        name: "Hyunet India",
        logo: "/assets/partners/Picture17.png",
    },
    {
        id: 17,
        name: "GSS",
        logo: "/assets/partners/Picture18.png",
    },
];




export default function OurPartners({
    autoplay = true,
    autoplayDelay = 2000,
    showNavigation = true,
    slidesToShow = 5,
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
            slidesToScroll: 1,
        },
        autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [],
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            // Optional: Add any selection logic here
        }

        emblaApi.on("select", onSelect)
        onSelect()

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    return (
        <div className={styles.partnersSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className={styles.sectionTitle}>Our Partners</h2>
                    </div>
                </div>

                <div className={styles.carouselWrapper}>
                    {showNavigation && (
                        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={scrollPrev}>
                            <LuChevronLeft size={24} />
                        </button>
                    )}

                    <div className={styles.embla} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {partnersData.map((partner) => (
                                <div key={partner.id} className={styles.emblaSlide} >
                                    <div className={styles.partnerCard}>
                                        <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className={styles.partnerLogo} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showNavigation && (
                        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={scrollNext}>
                            <LuChevronRight size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
