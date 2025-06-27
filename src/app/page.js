import RentalCard from "@/components/homepage/RentalCard";
import Banner from "@/components/homepage/Banners";
import Overview from "@/components/homepage/Overview";
import TrackRecord from "@/components/homepage/TrackRecord";
import BuisnessFocus from "@/components/homepage/BuisnessFocus";
import BusinessDivisionsCarousel from "@/components/homepage/BusinessDivisionCarousel";
import EventsGallery from "@/components/homepage/EventsGallery";
import PartnersSection from "@/components/homepage/PartnersSection";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";



export default function Home() {
  return (
    <>
    <Banner />
    <Overview />
    <TrackRecord />
    <BuisnessFocus />
        <BusinessDivisionsCarousel />
      <EventsGallery />
      <PartnersSection />
      <UpcomingEvents />
    </>
  );
}
