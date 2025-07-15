import ContactUs from '@/components/ContactUs'
import CommonBanner from '@/components/ui/CommonBanner'

const page = () => {
    return (
        <>
            <CommonBanner
                imageSrc="/assets/banners/contactus.png"
                title="Get in Touch with Bahwan International Group"
                subtitle="Your Message, Our Expertise — Directed to the Right Team Immediately"
                buttons={[
                    { label: 'Explore More', href: '/buy' },
                    { label: 'Contact Us', href: '/contact', variant: 'secondary' },
                ]}
                textPosition={{ top: '55%', left: '5%' }}
            />
            <ContactUs />
        </>
    )
}

export default page