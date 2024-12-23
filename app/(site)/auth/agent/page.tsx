import AgentRegistration from "@/components/AgentRegistration";
import React, { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
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