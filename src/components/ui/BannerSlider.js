"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styles from "@/styles/BannerSlider.module.css"

// type TextPosition =
//   | "left"
//   | "right"
//   | "center"
//   | "top-left"
//   | "top-right"
//   | "top-center"
//   | "bottom-left"
//   | "bottom-right"
//   | "bottom-center"



export default function BannerSlider({ slides, autoplay = true, autoplayDelay = 5000, showNavButtons = true }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, autoplay ? [Autoplay({ delay: autoplayDelay })] : [])

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isVisible, setIsVisible] = useState({})

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

    const getTextPositionClass = (position = "center") => {
        const positionMap = {
            left: styles.textLeft,
            right: styles.textRight,
            center: styles.textCenter,
            "top-left": styles.textTopLeft,
            "top-right": styles.textTopRight,
            "top-center": styles.textTopCenter,
            "bottom-left": styles.textBottomLeft,
            "bottom-right": styles.textBottomRight,
            "bottom-center": styles.textBottomCenter,
        }
        return positionMap[position] || styles.textCenter
    }

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        const newIndex = emblaApi.selectedScrollSnap()
        setSelectedIndex(newIndex)
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())

        // Reset visibility for all slides
        const newVisibility = {}
        slides.forEach((slide) => {
            newVisibility[slide.id] = false
        })

        setIsVisible(newVisibility)

        // Trigger animation after a short delay
        setTimeout(() => {
            if (slides[newIndex]) {
                setIsVisible((prev) => ({
                    ...prev,
                    [slides[newIndex].id]: true,
                }))
            }
        }, 100)
    }, [emblaApi, slides])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)

        // Initialize first slide as visible
        if (slides.length > 0) {
            setTimeout(() => {
                setIsVisible({ [slides[0].id]: true })
            }, 100)
        }
    }, [emblaApi, onSelect, slides])

    return (
        <div className="position-relative">
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((slide, index) => {
                        const slideVisible = isVisible[slide.id]
                        const positionClass = getTextPositionClass(slide.textPosition)

                        return (
                            <div key={slide.id} className={styles.emblaSlide}>
                                <div className={styles.bannerContent} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
                                    <div className={styles.bannerOverlay}></div>
                                    <div
                                        className={`
                      ${styles.bannerText} 
                      ${positionClass}
                      ${styles.bannerTextAnimated} 
                      ${slideVisible ? styles.bannerTextVisible : ""}
                    `}
                                    >
                                        <h1
                                            className={`
                        ${styles.bannerTitle} 
                        ${styles.bannerTitleAnimated} 
                        ${slideVisible ? styles.bannerTitleVisible : ""}
                      `}
                                        >
                                            {slide.title}
                                        </h1>
                                        <p
                                            className={`
                        ${styles.bannerSubtitle} 
                        ${styles.bannerSubtitleAnimated} 
                        ${slideVisible ? styles.bannerSubtitleVisible : ""}
                      `}
                                        >
                                            {slide.subtitle}
                                        </p>
                                        <button
                                            className={`
                        btn text-white 
                        ${styles.bannerButton} 
                        ${styles.bannerButtonAnimated} 
                        ${slideVisible ? styles.bannerButtonVisible : ""}
                      `}
                                            onClick={slide.buttonAction}
                                        >
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            {showNavButtons && (<div className={styles.emblaControls}>
                <button
                    className={styles.emblaButton}
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    aria-label="Previous slide"
                >
                    <FaChevronLeft />
                </button>

                <div className={styles.emblaDots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.emblaDot} ${index === selectedIndex ? styles.selected : ""}`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button className={styles.emblaButton} onClick={scrollNext} disabled={nextBtnDisabled} aria-label="Next slide">
                    <FaChevronRight />
                </button>
            </div>)}
        </div>
    )
}
