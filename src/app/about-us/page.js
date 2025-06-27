import Image from 'next/image'
import EmpoweringLivesSection from '@/components/about-us/EmpoweringLivesSection'
import MeetTheTeam from '@/components/about-us/MeetTheTeam'
import TransformationJourney from '@/components/about-us/TransformationJourney'
import WhatWeBelieve from '@/components/about-us/WhatWeBelieve'

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

const AboutUsPage = () => {
    return (
        <>

            {/* Hero Banner */}
            <div className="position-relative w-100" style={{ height: "60vh" }}>
                {/* Background Image */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url('/assets/banners/aboutus.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                    }}
                ></div>

                {/* Dark Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        zIndex: 1,
                    }}
                ></div>

                {/* Content */}
                <div
                    className="position-relative text-white d-flex flex-column justify-content-center align-items-center h-100 text-center px-3"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="display-4 fw-bold mb-3">
                        Driven by Vision. United by Purpose.
                    </h1>
                    <p className="lead">
                        Bahwan International Group is Oman’s only multinational automotive enterprise,
                        leading the way in vehicle sales, rentals, financing, and contracting services across five countries.
                    </p>
                </div>
            </div>


            {/* Content Sections */}
            <EmpoweringLivesSection />
            <TransformationJourney />
            <MeetTheTeam />
            <WhatWeBelieve />
        </>
    )
}

export default AboutUsPage
