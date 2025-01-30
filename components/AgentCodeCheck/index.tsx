"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { X } from "lucide-react";

const AgentCode = () => {

    const [agentCode, setAgentCode] = useState("");
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [agentData, setAgentData] = useState<any>(null);
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const router = useRouter();
    const validateAgentCode = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${agentCode}`);
            if (!response.ok) {
                throw new Error("Contact with TPA");
            }
            const data = await response.json();

            if (data) {
                setIsCodeValid(true);
                setAgentData(data);
                router.push("/auth/agent");
            } else {
                throw new Error("Contact with TPA");
            }
        } catch (error) {
            setIsCodeValid(false);
            setAgentData(null);
            setVisible(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!password) {
            alert("Please enter a password");
            return;
        }

        const response = await fetch("/api/register-agent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...agentData, password })
        });

        if (response.ok) {
            alert("Registration successful");
        } else {
            alert("Registration failed");
        }
    };


    return (
        <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
            <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
                        <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
                          <Image
                            src="/images/shape/shape-dotted-light.svg"
                            alt="Dotted"
                            className="dark:hidden"
                            fill
                          />
                          <Image
                            src="/images/shape/shape-dotted-dark.svg"
                            alt="Dotted"
                            className="hidden dark:block"
                            fill
                          />
                        </div>
                <div className="max-w-md mx-auto rounded-lg focus:outline-none">
                    <h2 className="text-xl font-bold mb-4">Agent/Broker Registration</h2>
                    {(
                        <div>
                            {/* <label className="block text-sm font-medium">Agent/Broker Code:</label> */}
                            <input
                                type="text"
                                value={agentCode}
                                onChange={(e) => setAgentCode(e.target.value)}
                                className="w-full border-b border-stroke pb-3.5 mt-1 focus-visible:outline-none bg-transparent dark:focus:placeholder:text-white  focus:border-waterloo"
                                placeholder="Enter Agent/Broker Code"
                            />
                            <button
                                onClick={validateAgentCode}
                                className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
                            >
                                Check
                            </button>
                        </div>
                    )}
                    {visible && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "tween", // Use "tween" for precise duration control
                                duration: 0.2, // Adjust duration (seconds)
                                ease: "easeOut", // Smooth exit effect
                            }}
                            className="fixed top-200 right-0 w-80 bg-orange-500 text-white p-4 rounded-lg shadow-lg flex justify-between items-center"
                        >
                            <span className="text-sm font-semibold">Contact with TPA!</span>
                            <button onClick={() => setVisible(false)} className="text-white hover:text-gray-300">
                                <X size={20} />
                            </button>
                        </motion.div>)}
                </div>
            </div>
        </section>
    )
}

export default AgentCode;
