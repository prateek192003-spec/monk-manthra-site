import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import ProductShowcase from "@/components/ProductShowcase";
import ProductGrid from "@/components/ProductGrid";
import IngredientHonesty from "@/components/IngredientHonesty";
import HowItWorks from "@/components/HowItWorks";
import Bundle from "@/components/Bundle";
import Facts from "@/components/Facts";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <ProductShowcase />
        <ProductGrid />
        <IngredientHonesty />
        <HowItWorks />
        <Bundle />
        <Facts />
        <Journal />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
