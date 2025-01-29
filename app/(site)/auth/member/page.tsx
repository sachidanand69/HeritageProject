import MemberRegistration from "@/components/MemberRegistration";
import React, { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Registration",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const Member = () => {
  
  return (
    <>
      <MemberRegistration/>
    </>
  );
};

export default Member;