import { Metadata } from "next";
import HealthTool from "@/components/HealthTool";
export const metadata: Metadata = {
  title: "Health Tools",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const HealthTools = () => {
  
  return (
    <>
       <HealthTool/>
    </>
  );
};

export default HealthTools;