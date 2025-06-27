"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BusinessDivisionsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const businessDivisions = [
        {
            id: 1,
            name: "VGV",
            logo: "/assets/business-divisions/vgvksa-1.png",
            description: "Automotive excellence and innovation",
        },
        {
            id: 2,
            name: "BESTUNE",
            logo: "/assets/business-divisions/bestune-oman-1.png",
            description: "Premium automotive solutions",
        },
        {
            id: 3,
            name: "VINFAST",
            logo: "/assets/business-divisions/vinfast-oman-2.png",
            description: "Electric vehicle innovation",
            featured: true,
        },
        {
            id: 4,
            name: "BAHWAN MOTORS",
            logo: "/assets/business-divisions/Bahwan_Motors_Dubai-1.png",
            description: "Automotive distribution and service",
        },
        {
            id: 5,
            name: "DYNAMIC TRADING LLC",
            logo: "/assets/business-divisions/dynamic-tradingllc-1.png",
            description: "Chinese automotive excellence",
        },
        {
            id: 6,
            name: "POPULAR CARS",
            logo: "/assets/business-divisions/PopularcarsLogo-1.png",
            description: "Korean automotive innovation",
        },
    ]

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

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on("reInit", onInit)
        emblaApi.on("select", onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <section
            className="py-5 position-relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
                minHeight: "500px",
            }}
        >
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold text-white mb-3">Business Divisions</h2>
                    <p className="text-white opacity-90 mx-auto" style={{ maxWidth: "600px" }}>
                        Each business division of Bahwan International Group holding follow responsible business practices.
                    </p>
                </div>

                {/* Embla Carousel */}
                <div className="position-relative">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container d-flex">
                            {businessDivisions.map((division, index) => (
                                <div key={division.id} className="embla__slide flex-shrink-0 px-3">
                                    <div
                                        className={`business-division-card ${division.featured ? "featured" : ""} ${selectedIndex === index ? "active" : ""}`}
                                    >
                                        <div
                                            className={`card border-0 shadow-lg text-center `}
                                            style={{
                                                borderRadius: "20px",
                                                height: "150px",
                                                transition: "all 0.3s ease",
                                                transform: selectedIndex === index ? "scale(1.0)" : "scale(0.9)",
                                                opacity: selectedIndex === index ? 1 : 0.7,
                                                backgroundColor: selectedIndex === index ? "white" : "transparent"
                                            }}
                                        >
                                            <div className="card-body d-flex flex-column justify-content-center p-0">
                                                <div className="mb-3">
                                                    <Image
                                                        src={division.logo || "/placeholder.svg"}
                                                        alt={division.name}
                                                        width={180}
                                                        height={90}
                                                        className="img-fluid"
                                                        style={{ objectFit: "contain" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="carousel-nav-btn prev-btn position-absolute top-50 translate-middle-y"
                        onClick={scrollPrev}
                        style={{ left: "20px", zIndex: 10 }}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="carousel-nav-btn next-btn position-absolute top-50 translate-middle-y"
                        onClick={scrollNext}
                        style={{ right: "20px", zIndex: 10 }}
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="d-flex justify-content-center mt-4">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`dot-btn mx-1 ${index === selectedIndex ? "active" : ""}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .embla {
          overflow: hidden;
        }
        
        .embla__container {
          display: flex;
        }
        
        .embla__slide {
          flex: 0 0 300px;
          min-width: 0;
        }

        .business-division-card {
          transition: all 0.3s ease;
        }

        .carousel-nav-btn {
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #4A90E2;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-nav-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .dot-btn {
          width: 12px;
          height: 12px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot-btn.active {
          background: white;
          transform: scale(1.2);
        }

        .dot-btn:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 250px;
          }
          
          .carousel-nav-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>
        </section>
    )
}
