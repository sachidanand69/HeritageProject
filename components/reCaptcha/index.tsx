"use client";

import React, {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type {NextPage} from "next";
// import {ChildProps} from "postcss";

interface ReCaptchaProps {
    onDataChange?: (data: boolean) => void
}
interface ChildProps {
    onDataChange: (data: boolean) => void; // Mandatory function prop
}

const reCaptcha: React.FC<ChildProps> = ({onDataChange}) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        try {
            if (token) {
                await fetch("/api", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({token}),
                });
                setIsVerified(true);
                onDataChange(true);
            }
        } catch (e) {
            setIsVerified(false);
        }
    }

    const handleChange = (token: string | null) => {
        handleCaptchaSubmission(token);
    };

    function handleExpired() {
        setIsVerified(false);
    }

    return (
        <main className="flex flex-col items-center mt-10 gap-3 ">
            <ReCAPTCHA
                sitekey="6Lciz8YqAAAAADg-UgImfqW9B45tADa_ZNZgZDhO"
                ref={recaptchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
            />
        </main>
    );
};

export default reCaptcha;