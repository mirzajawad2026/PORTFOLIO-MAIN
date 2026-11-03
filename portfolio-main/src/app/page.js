import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import ScrollTop from "@/components/ScrollTop";
export default function Page() {
  return (<><Preloader /><Header /><main><Hero /><About /><Services /><Projects /><Marquee /><Contact /></main><ScrollTop /></>);
}
