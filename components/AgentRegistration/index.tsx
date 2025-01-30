"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useRandom } from "@/Context/context";
// Define types for state and alert messages
type FormData = {
  firstname: string;
  lastname: string;
  agent_Code: string;
  email: string;
  mobile_no: string;
  user_name: string;
  password: string;
  confirmpassword: string;
};

const AgentRegistration = () => {
  const [data, setData] = useState<FormData>({
    firstname: "",
    lastname: "",
    agent_Code: "",
    email: "",
    mobile_no: "",
    user_name: "",
    password: "",
    confirmpassword: "",
  }); 

  
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Form Validation
  const validateForm = () => {
    const { firstname, lastname, email, password, confirmpassword } = data;
    if (!firstname || !lastname || !email || !password || password !== confirmpassword) {
      setAlert({ type: "error", message: "Invalid input or passwords do not match!" });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload

    if (!validateForm()) return;

    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch("https://faux-api.com/api/v1/agentsreg_005388653310497427/fetchRecentData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([data]),
      });

      const settingdata = await response.json();
      console.log(settingdata);
      if (response.ok) {
        setAlert({ type: "success", message: "Registration successful!" });
        setData({
          firstname: "",
          lastname: "",
          agent_Code: "",
          email: "",
          mobile_no: "",
          user_name: "",
          password: "",
          confirmpassword: "",
        });
      } else {
        setAlert({ type: "error", message: settingdata.message || "Something went wrong!" });
      }
    } catch (error) {
      setAlert({ type: "error", message: "Failed to register." });
    }

    setLoading(false);
  };

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

        {/* Display Alert */}
        {alert && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`fixed top-30 right-5 px-4 py-3 rounded-lg shadow-lg text-white ${alert.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
          >
            {alert.message}
            <button className="ml-4 text-white font-bold" onClick={() => setAlert(null)}>✖</button>
          </motion.div>
        )}

        <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
          Agent Registration
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              name="firstname"
              type="text"
              placeholder="First name"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />

            <input
              name="lastname"
              type="text"
              placeholder="Last name"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />
          </div>

          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              name="agent_Code"
              type="text"
              placeholder="Agent Code"
              value={data.agent_Code}
              onChange={(e) => setData({ ...data, agent_Code: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />
          </div>

          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              name="mobile_no"
              type="text"
              placeholder="Mobile Number"
              value={data.mobile_no}
              onChange={(e) => setData({ ...data, mobile_no: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />

            <input
              name="user_name"
              type="text"
              placeholder="User Name"
              value={data.user_name}
              onChange={(e) => setData({ ...data, user_name: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />
          </div>

          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />

            <input
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              value={data.confirmpassword}
              onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:outline-none dark:border-strokedark"
            />
          </div>

          <div className="flex gap-10">
            <button type="reset" className="bg-gray-500 text-white px-6 py-3 rounded-full" onClick={() => {
              setData({
                firstname: "", lastname: "", agent_Code: "", email: "", mobile_no: "", user_name: "", password: "", confirmpassword: ""
              })
            }}>
              Reset
            </button>

            <button type="submit" disabled={loading} className="bg-black text-white px-6 py-3 rounded-full">
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AgentRegistration;

