import AgentRegistration from "@/components/AgentRegistration";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Registration",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const Agent = () => {
  
  return (
    <>
      <AgentRegistration/>
    </>
  );
};

export default Agent;