
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import StoreContextProvider from "@/Context/context";
import AgentRegistration from "@/components/AgentRegistration";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "Heritage Healthcare TPA",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main>

        {/*<NavigationBar/>*/}

      <Hero />
      
      <Feature />
      <About />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      {/* <Testimonial />
      <Pricing /> */}
      {/* <Blog /> */}
      <Brands />
      <Contact />
    </main>
  );
}
