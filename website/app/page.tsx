import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedVendors />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
