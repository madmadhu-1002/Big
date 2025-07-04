import PartnersSection from "@/components/homepage/PartnersSection"
import SlidingCards from "@/components/SlidingCards"
import Image from "next/image"
import { Row, Col, Container } from "react-bootstrap"

const page = () => {
    return (
        <>
            {/* Hero Banner */}
            <div className="min-w-full flex-shrink-0 position-relative "
                data-aos='fade-down'>
                <Image
                    src="/assets/banners/business-categories.png"
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
                                Rental
                            </li>
                        </ol>
                    </nav>
                </div>
                <Container >
                    <Row>
                        <Col lg={6} className="my-5">
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
                                    src="/assets/business1.png"
                                    alt="About Autorent"
                                    fill
                                    style={{ borderRadius: '12px', objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <PartnersSection />
                <SlidingCards />



            </div>
        </>
    )
}

export default page