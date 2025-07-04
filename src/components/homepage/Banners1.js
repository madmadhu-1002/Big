"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { LuChevronLeft, LuChevronRight, LuPlay, LuPause } from "react-icons/lu";
import styles from "@/styles/Banners1.module.css"

const bannerData = [
    {
        id: 1,
        title: "Bahwan International Group",
        blueText: "Ventures",
        backgroundImage: "/assets/banners/banners1.png",
        // description: "Pioneering innovative business ventures across diverse industries",
        buttons: [
            { text: "Know More", variant: "primary" },
            { text: "Contact Us", variant: "secondary" },
        ],
    },
    {
        id: 2,
        title: "Bahwan International Group",
        blueText: "Infrastructure",
        backgroundImage: "/assets/banners/banners2.png",

        buttons: [
            { text: "Explore Projects", variant: "primary" },
            { text: "Get Quote", variant: "secondary" },
        ],
    },
    {
        id: 3,
        title: "Bahwan International Group",
        blueText: "Technology",
        backgroundImage: "/assets/banners/banners3.png",
        buttons: [
            { text: "Our Solutions", variant: "primary" },
            { text: "Schedule Demo", variant: "secondary" },
        ],
    },
    {
        id: 4,
        title: "Bahwan International Group",
        blueText: "Sustainability",
        backgroundImage: "/assets/banners/banners4.png",
        buttons: [
            { text: "Learn More", variant: "primary" },
            { text: "Join Initiative", variant: "secondary" },
        ],
    },
    {
        id: 5,
        title: "Bahwan International Group",
        blueText: "Innovation",
        backgroundImage: "/assets/banners/banners5.png",
        buttons: [
            { text: "Innovation Lab", variant: "primary" },
            { text: "Partner With Us", variant: "secondary" },
        ],
    },
]

export default function Banners1() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)
    const [autoplayPlugin] = useState(() => Autoplay({ delay: 4000, stopOnInteraction: false }))

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            axis: "y",
            loop: true,
            skipSnaps: false,
            dragFree: false,
        },
        [autoplayPlugin],
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback(
        (index) => {
            if (emblaApi) emblaApi.scrollTo(index)
        },
        [emblaApi],
    )

    const toggleAutoplay = useCallback(() => {
        if (!emblaApi) return

        if (isAutoPlay) {
            autoplayPlugin.stop()
        } else {
            autoplayPlugin.play()
        }
        setIsAutoPlay(!isAutoPlay)
    }, [emblaApi, autoplayPlugin, isAutoPlay])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    const currentBanner = bannerData[selectedIndex] || bannerData[0]

    return (
        <div className={styles.container}>
            {/* Embla Carousel */}
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {bannerData.map((banner, index) => (
                        <div key={banner.id} className={styles.emblaSlide}>
                            <div className={styles.bannerSlide} style={{ backgroundImage: `url(${banner.backgroundImage})` }}>
                                <div className={styles.bannerOverlay} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Header Content */}
            <div className={styles.headerSection}>
                <motion.div className={styles.headerContent}>
                    <motion.h1 className={styles.mainTitle}>
                        <span className={styles.whiteText}>{currentBanner.title}</span>
                        <span className={styles.separator}> | </span>
                        <motion.span
                            className={styles.blueText}
                            key={`blue-${selectedIndex}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {currentBanner.blueText}
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        key={`desc-${selectedIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {currentBanner.description}
                    </motion.p>

                    <motion.div
                        className={styles.buttonGroup}
                        key={`buttons-${selectedIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {currentBanner.buttons.map((button, index) => (
                            <button
                                key={index}
                                className={`${styles.button} ${button.variant === "primary" ? styles.primaryButton : styles.secondaryButton
                                    }`}
                            >
                                {button.text}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Get in Touch Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarContent}>
                        <span>Get in touch</span>
                    </div>
                </div>
            </div>

            {/* Horizontal Navigation Controls */}
            <div className={styles.navigationControls}>
                <button className={styles.navButton} onClick={scrollPrev} aria-label="Previous slide">
                    <LuChevronLeft size={20} />
                </button>

                <div className={styles.slideIndicators}>
                    {bannerData.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === selectedIndex ? styles.activeIndicator : ""}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>

                <button className={styles.navButton} onClick={scrollNext} aria-label="Next slide">
                    <LuChevronRight size={20} />
                </button>
            </div>

            {/* Play/Pause Control */}
            <div className={styles.playControl}>
                <button className={styles.playPauseButton} onClick={toggleAutoplay}>
                    {isAutoPlay ? <LuPause size={16} /> : <LuPlay size={16} />}
                </button>
            </div>
        </div>
    )
}
