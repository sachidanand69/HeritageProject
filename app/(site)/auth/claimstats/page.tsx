import ClaimStatus from "@/components/ClaimStatus";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Claim Status",
    description: "",
    // other metadata
};

const Claim = () => {

    return (
        <>
            <ClaimStatus />
        </>
    );
};

export default Claim;