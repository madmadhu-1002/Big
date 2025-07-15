import CommonBanner from '@/components/ui/CommonBanner'
import EmpoweringLivesSection from '@/components/about-us/EmpoweringLivesSection'
import MeetTheTeam from '@/components/about-us/MeetTheTeam'
import VideoPlayer from '@/components/ui/VideoPlayer'
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

            <CommonBanner
                imageSrc="/assets/banners/aboutus1.png"
                title="Driven by Vision. United by Purpose."
                subtitle="Bahwan International Group is Oman’s only multinational automotive enterprise, leading the way in vehicle sales, rentals, financing, and contracting services across 8+ countries."
                textPosition={{ top: '55%', left: '5%' }}
            />


            {/* Content Sections */}
            <EmpoweringLivesSection />
            <WhatWeBelieve />
            <MeetTheTeam />
            <VideoPlayer
                posterSrc="/assets/about-video.png"
                videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Our World, Our Impact "
                subtitle="Step into our world and see how Bahwan International Group creates value across industries and borders."
                alt="Bahwan International Group - Industrial Operations"
            />
        </>
    )
}

export default AboutUsPage
