"use client"

import BannerSlider from "@/components/ui/BannerSlider"

const bannerSlides = [
    {
        id: "1",
        title: "ROX 01",
        subtitle: "Luxury All-Terrain Range Extended Family SUV",
        buttonText: "Explore Now",
        backgroundImage: "/assets/homepage-2.png",
        buttonAction: () => console.log("ROX 01 clicked"),
        textPosition: "left"
    },
    {
        id: "2",
        title: "APEX SERIES",
        subtitle: "Revolutionary Electric Performance Vehicles",
        buttonText: "Discover More",
        backgroundImage: "/assets/homepage-3.png",
        buttonAction: () => console.log("APEX clicked"),
        textPosition: "right"
    },
    {
        id: "3",
        buttonText: "Learn More",
        backgroundImage: "/assets/homepage-4.png",
        buttonAction: () => console.log("Urban Mobility clicked"),
        textPosition: "top-right"
    },
]

const BannerSliderSection = () => {
    return (
        <div className="container-fluid my-3">
            <BannerSlider slides={bannerSlides} autoplay={true} autoplayDelay={6000} showNavButtons={false} />

        </div>
    )
}

export default BannerSliderSection