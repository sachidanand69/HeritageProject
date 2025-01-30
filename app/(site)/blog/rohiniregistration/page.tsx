import RohiniRegistration from "@/components/RohiniRegistration";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rohini Registration",
    description: "",
    // other metadata
};

const Rohini = () => {

    return (
        <>
            <RohiniRegistration />
        </>
    );
};

export default Rohini;