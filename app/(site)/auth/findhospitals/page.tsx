import CorporateEmpRegistration from "@/components/CorporateEmpRegistration";
import React, { useState } from "react";
import { Metadata } from "next";
import FindHospitals from "@/components/FindHospitals";

export const metadata: Metadata = {
  title: "find hospitals",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const FindHosp = () => {
  
  return (
    <>
      <FindHospitals/>
    </>
  );
};

export default FindHosp;