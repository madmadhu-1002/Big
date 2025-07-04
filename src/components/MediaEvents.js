import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MediaEventCard from './ui/MediaEventCard.js';
import LatestEvents from './LatestEvents.js';
import Image from 'next/image';



const mediaEventsData = [
    {
        image: "/assets/media-events-1.png",
        alt: "GAA Safety",
        title: "Driving Sales, Boosting Revenue, and Prioritizing Safety & Health",
        description: "In July 2024, the GAA team marked significant milestones in sales, revenue, and workplace safety.",
        link: "#"
    },
    {
        image: "/assets/media-events-2.png",
        alt: "Saudi Alliance",
        title: "Strategic Alliance for Commercial Vehicle Assembly Signed in Saudi Arabia",
        description: "Saudi Diesel Equipment Co., Perfect Arabic Factory, and Daewoo Trucks signed an MoU to explore local assembly.",
        link: "#"
    },
    {
        image: "/assets/media-events-3.png",
        alt: "VinFast Showroom",
        title: "VinFast Launches First Showroom in Oman, Expanding into the Middle East",
        description: "VinFast opened its first showroom in Muscat, offering an immersive EV experience.",
        link: "#"
    },
    {
        image: "/assets/media-events-4.png",
        alt: "VinFast BAT",
        title: "VinFast Appoints BAT as First Official Dealer in the Middle East",
        description: "BAT will manage 13 showrooms and service centers across Oman from 2024 to 2027.",
        link: "#"
    },
    {
        image: "/assets/media-events-3.png",
        alt: "BAT Mahindra",
        title: "BAT UAE Appointed as Authorized Mahindra Distributor for South Sudan and Beyond",
        description: "BAT UAE signed a distribution agreement with Mahindra Rise to cover South Sudan.",
        link: "#"
    },
    {
        image: "/assets/media-events-2.png",
        alt: "Bahwan Accelus",
        title: "Bahwan Motors Introduces Premium Accelus Tyres in the UAE",
        description: "Bahwan Motors Auto Accessories launched the Accelus tyre brand in the UAE with Ralson India.",
        link: "#"
    }
];

const MediaEvents = () => {
    return (
        <>
            {/* Hero Banner */}
            <div className="min-w-full flex-shrink-0 position-relative "
                data-aos='fade-down'>
                <Image
                    src="/assets/banners/media-events.png"
                    width={1467}
                    height={614}
                    alt="banners"
                    layout="responsive"
                    className="h-100"

                />


            </div>
            <div className="bg-light">
                {/* Breadcrumb */}
                <div className="container py-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="/" className="text-decoration-none" style={{ color: "#0ea5e9" }}>
                                    🏠
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/" className="text-decoration-none" style={{ color: "#0ea5e9" }}>
                                    Home
                                </a>
                            </li>
                            <li className="breadcrumb-item active text-muted" aria-current="page">
                                Media and Events
                            </li>
                        </ol>
                    </nav>
                </div>
                <Container >
                    <Row>
                        <Col lg={7} className="my-5">
                            <p className="mb-4" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                Autorent Car Rental LLC is one of the Middle East's leading auto rental and leasing service companies with
                                a track record of delivering exceptional customer experience. With a growing presence in over 16 prime
                                locations across 12 cities in the UAE, Bahrain, KSA, and Oman, Autorent has been helping its customers get
                                on the road faster with truly hassle-free car rentals and leasing.
                            </p>

                            <p className="mb-4" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                With a fleet of more than 13,000 cars, we are adept at providing high-end value-added service within the
                                shortest duration. Awarded "Best Car Rental Brand in UAE", Autorent has redefined the car rental and lease
                                market. Our story evolved and developed with the rise and leap of the modern UAE. We came together from
                                varied pasts and different sectors to realize the needs and possibilities that car rental has to offer.
                                The need for leisure and business travelers in UAE for a reliable rental and leasing service is what
                                prompted us to build Autorent.
                            </p>

                            <button
                                className="btn text-white px-4 py-2 fw-medium"
                                style={{ backgroundColor: "#0ea5e9", borderRadius: "8px" }}
                            >
                                Visit Now
                            </button>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '450px' }}>
                                <Image
                                    src="/assets/media-events-5.png"
                                    alt="About Autorent"
                                    fill
                                    style={{ borderRadius: '12px', objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="py-5">
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center order-2 order-lg-1">
                            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '450px' }}>
                                <Image
                                    src="/assets/media-events-6.png"
                                    alt="About Autorent"
                                    fill
                                    style={{ borderRadius: '12px', objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                        <Col lg={5} className="my-5 order-1 order-lg-2">
                            <p className="mb-4" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                Autorent Car Rental LLC is one of the Middle East's leading auto rental and leasing service companies with
                                a track record of delivering exceptional customer experience. With a growing presence in over 16 prime
                                locations across 12 cities in the UAE, Bahrain, KSA, and Oman, Autorent has been helping its customers get
                                on the road faster with truly hassle-free car rentals and leasing.
                            </p>

                            <p className="mb-4" style={{ lineHeight: "1.8", textAlign: "justify" }}>
                                With a fleet of more than 13,000 cars, we are adept at providing high-end value-added service within the
                                shortest duration. Awarded "Best Car Rental Brand in UAE", Autorent has redefined the car rental and lease
                                market. Our story evolved and developed with the rise and leap of the modern UAE. We came together from
                                varied pasts and different sectors to realize the needs and possibilities that car rental has to offer.
                                The need for leisure and business travelers in UAE for a reliable rental and leasing service is what
                                prompted us to build Autorent.
                            </p>

                            <button
                                className="btn text-white px-4 py-2 fw-medium"
                                style={{ backgroundColor: "#0ea5e9", borderRadius: "8px" }}
                            >
                                Visit Now
                            </button>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="bg-light py-5">
                <Container>
                    <Row className="g-4">
                        {mediaEventsData.map((event, idx) => (
                            <Col md={6} key={idx}>
                                <MediaEventCard {...event} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <LatestEvents />
        </>
    )
}

export default MediaEvents