
import Banners1 from "@/components/homepage/Banners1";
import Overview from "@/components/homepage/Overview";
import TrackRecord from "@/components/homepage/TrackRecord";
import BuisnessFocus from "@/components/homepage/BuisnessFocus";
import BusinessDivisionsCarousel from "@/components/homepage/BusinessDivisionCarousel";
import PartnersSection from "@/components/homepage/PartnersSection";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";
import LatestEvents from "@/components/LatestEvents";
import ContactUs from "@/components/ContactUs";
import LiquidGlassCard from "@/components/ui/LiquidGlassCard";
import VideoPlayer from "@/components/ui/VideoPlayer";
import BannerSliderSection from "@/components/BannerSliderSection";
import StrengthsSection from "@/components/homepage/StrengthsSection";
import OurPartners from "@/components/homepage/OurPartners";
import News from "@/components/homepage/News";



export default function Home() {
  return (
    <>
      <Banners1 />
      <OurPartners showNavigation={false} />
      <Overview />
      <TrackRecord />
      <BuisnessFocus />
      {/* <BusinessDivisionsCarousel /> */}
      <LatestEvents />
      {/* <PartnersSection /> */}
      {/* <UpcomingEvents /> */}
      <ContactUs />
      {/* <LiquidGlassCard /> */}
      <StrengthsSection />
      <VideoPlayer
        posterSrc="/assets/homepage-1.png"
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Bahwan International Group"
        subtitle="A Legacy of Trust, Transformation, and Trailblazing Excellence Since 2004"
        alt="Bahwan International Group - Industrial Operations"
      />
      <BannerSliderSection />
      <News autoplay={true} autoplayDelay={5000} showNavigation={true} />
    </>
  );
}
