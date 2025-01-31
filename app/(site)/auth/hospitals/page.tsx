import CorporateEmpRegistration from "@/components/CorporateEmpRegistration";
import React, { useState } from "react";
import { Metadata } from "next";
import HospitalList from "@/components/HospitalList";

export const metadata: Metadata = {
  title: "find hospitals",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const Hospitals = () => {
  
  return (
    <>
      <HospitalList/>
    </>
  );
};

export default Hospitals;