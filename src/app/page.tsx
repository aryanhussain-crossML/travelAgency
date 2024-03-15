import Header from "../components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontSlider from "@/components/slider/Slider";
import OurPackages from "@/components/ourPackages/ourPackages";
import Testimonials from "@/pages/testimonials/Testimonials";
import Footer from "@/components/footer/Footer.";

export default function Home() {
  return (
    <main className="theMain bg-gradient-to-l from-slate-500 ">
      <Header />
      <FrontSlider />
      <OurPackages />
      <Testimonials />
      <Footer />
    </main>
  );
}
