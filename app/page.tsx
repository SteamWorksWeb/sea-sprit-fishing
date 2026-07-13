import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TripPicker from "@/components/TripPicker";
import StatsBand from "@/components/StatsBand";
import WhySeaSpirit from "@/components/WhySeaSpirit";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import BlogPosts from "@/components/BlogPosts";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TripPicker />
      <StatsBand />
      <WhySeaSpirit />
      <About />
      <PhotoGallery />
      <Reviews />
      <BlogPosts />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
