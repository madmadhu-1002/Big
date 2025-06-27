"use client"
import { useState, useEffect } from "react"


const bannerData = [
  {
    id: 1,
    image: "/assets/banners/bigoman.png",
    dynamicText: "Leading",
  },
  {
    id: 2,
    image: "/assets/banners/aboutus.png",
    dynamicText: "Innovative",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=1200",
    dynamicText: "Building",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=1200",
    dynamicText: "Trusted",
  },
]

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerData.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerData.length) % bannerData.length)
  }

  return (
    <div className="position-relative overflow-hidden" style={{ height: "400px" }}>
      {/* Banner Images */}
      {bannerData.map((banner, index) => (
        <div
          key={banner.id}
          className={`position-absolute w-100 h-100 transition-opacity ${
            index === currentBanner ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay Content */}
          <div className="d-flex align-items-center justify-content-center h-100">
  <div className="text-center text-white px-4">
    <h1
      className="display-4 fw-bold mb-3"
      style={{
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        fontSize: "clamp(1.5rem, 4vw, 3rem)",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      Bahwan International Group |
      <span
        style={{
          display: "inline-block",
          maxWidth: "250px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {banner.dynamicText}
      </span>
    </h1>
  </div>
</div>

        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3"
        onClick={prevBanner}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          opacity: "0.8",
          zIndex: 10,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3"
        onClick={nextBanner}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          opacity: "0.8",
          zIndex: 10,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
        <div className="d-flex gap-2">
          {bannerData.map((_, index) => (
            <button
              key={index}
              className={`btn p-0 ${index === currentBanner ? "bg-white" : "bg-secondary"}`}
              onClick={() => setCurrentBanner(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                opacity: index === currentBanner ? "1" : "0.6",
                border: "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
