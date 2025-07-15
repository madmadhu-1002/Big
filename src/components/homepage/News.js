"use client"

import { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import styles from "@/styles/News.module.css"

const newsData = [
    {
        id: 1,
        title: "New Vehicle Launch",
        subtitle: "Sinotruk Golden Prince SUV",
        description:
            "Introducing our latest premium SUV with advanced technology and superior comfort for modern families.",
        date: "March 15, 2025",
        image: "/assets/blog1.png",
        category: "Product Launch",
        readTime: "3 min read",
    },
    {
        id: 2,
        title: "VinFast Customer Meet in Oman in September 2025",
        subtitle: "Community Engagement Event",
        description:
            "During the holy month of Ramadan, the group organized a series of Iftar events, fostering community spirit and strengthening bonds among employees and partners.",
        date: "June 05, 2025",
        image: "/assets/blog2.png",
        category: "Events",
        readTime: "5 min read",
    },
    {
        id: 3,
        title: "Strategic Partnership Announcement",
        subtitle: "Valvoline Collaboration",
        description:
            "Strengthening our commitment to quality with premium automotive solutions and enhanced customer service excellence.",
        date: "April 20, 2025",
        image: "/assets/blog3.png",
        category: "Partnership",
        readTime: "4 min read",
    },
    {
        id: 4,
        title: "Innovation Summit 2025",
        subtitle: "Technology & Future Mobility",
        description:
            "Exploring the future of transportation with cutting-edge technology, sustainable solutions, and innovative mobility concepts.",
        date: "May 10, 2025",
        image: "/assets/blog1.png",
        category: "Innovation",
        readTime: "6 min read",
    },
    {
        id: 5,
        title: "Sustainability Initiative",
        subtitle: "Green Future Program",
        description:
            "Launching comprehensive environmental programs focused on reducing carbon footprint and promoting sustainable business practices.",
        date: "February 28, 2025",
        image: "/assets/blog3.png",
        category: "Environment",
        readTime: "4 min read",
    },
]



export default function News({
    autoplay = true,
    autoplayDelay = 5000,
    showNavigation = true,
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
        <div className={styles.newsSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <h2 className={`${styles.sectionTitle} display-4 fw-bold text-primary`}>Latest News & Events</h2>
                            <p className="lead text-muted">Stay updated with our latest developments and achievements</p>
                        </div>
                    </div>
                </div>

                <div className={styles.carouselWrapper}>
                    {showNavigation && (
                        <button className={`${styles.navButton} ${styles.prevButton} btn`} onClick={scrollPrev}>
                            <FaChevronLeft size={24} />
                        </button>
                    )}

                    <div className={styles.embla} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {newsData.map((news) => (
                                <div key={news.id} className={`${styles.emblaSlide} col-lg-4 col-md-6 col-12`}>
                                    <div className={`${styles.newsCard} card h-100 border-0 shadow-sm`}>
                                        <div className={styles.imageContainer}>
                                            <img
                                                src={news.image || "/placeholder.svg"}
                                                alt={news.title}
                                                className={`${styles.newsImage} card-img-top`}
                                            />
                                            <div className={`${styles.categoryBadge} badge bg-primary position-absolute`}>
                                                {news.category}
                                            </div>

                                            {/* Hover Content */}
                                            <div className={styles.hoverContent}>
                                                <div className={`${styles.hoverText} text-white`}>
                                                    <div className={`${styles.dateInfo} d-flex align-items-center mb-2`}>
                                                        <AiOutlineCalendar size={16} className="me-2" />
                                                        <small>{news.date}</small>
                                                        <span className="mx-2">•</span>
                                                        <small>{news.readTime}</small>
                                                    </div>
                                                    <h4 className={`${styles.hoverTitle} h5 fw-bold mb-2`}>{news.title}</h4>
                                                    <h6 className={`${styles.hoverSubtitle} text-light mb-3`}>{news.subtitle}</h6>
                                                    <p className={`${styles.hoverDescription} small mb-3`}>{news.description}</p>
                                                    <button className={`${styles.readMoreBtn} btn btn-light btn-sm d-flex align-items-center`}>
                                                        Read More <HiArrowRight size={16} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showNavigation && (
                        <button className={`${styles.navButton} ${styles.nextButton} btn`} onClick={scrollNext}>
                            <FaChevronRight size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
