import CorporateEmpRegistration from "@/components/CorporateEmpRegistration";
import React, { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const Corporate = () => {
  
  return (
    <>
      <CorporateEmpRegistration/>
    </>
  );
};

export default Corporate;