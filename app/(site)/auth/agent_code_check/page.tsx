import { Metadata } from "next";
import AgentCode from "@/components/AgentCodeCheck";
export const metadata: Metadata = {
  title: "Agent Code",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const AgentCodeCheck = () => {
  
  return (
    <>
       <AgentCode/>
    </>
  );
};

export default AgentCodeCheck;