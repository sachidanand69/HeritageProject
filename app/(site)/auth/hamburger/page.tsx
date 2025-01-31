import { Metadata } from "next";
import HamburgerMenu from "@/components/HamburgerMenu";
export const metadata: Metadata = {
  title: "Hamburger",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const HealthTools = () => {
  
  return (
    <>
       <HamburgerMenu/>
    </>
  );
};

export default HealthTools;