"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import { useAppContext } from '@/Context/context';
import { useRouter } from 'next/navigation';
import ReCaptcha from "@/components/reCaptcha";

interface FormValues {
  firstName: string;
  lastName: string;
  policy_number: string;
  card_number: string;
  email_address: string;
  employee_id: string;
  mobile_number: string;
  User_Name: string;
  password: string;
  confirm_password: string;
}

interface FormErrors {
  [key: string]: string;
}

const CorporateEmpRegistration: React.FC = () => {

  const [data, setData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    policy_number: "",
    card_number: "",
    email_address: "",
    employee_id: "",
    mobile_number: "",
    User_Name: "",
    password: "",
    confirm_password: ""
  });
  const [isVerified, setIsVerified] = useState(false);

  const router = useRouter();
  console.log(router);

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!data.policy_number.trim()) {
      newErrors.policy_number = "Policy number is required.";
    }
    if (!data.card_number.trim()) {
      newErrors.card_number = "Card number is required.";
    }
    if (!data.email_address.trim()) {
      newErrors.email_address = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_address)) {
      newErrors.email_address = "Invalid email address format.";
    }
    if (!data.employee_id.trim()) {
      newErrors.employee_id = "Employee ID is required.";
    }
    if (!data.mobile_number.trim()) {
      newErrors.mobile_number = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(data.mobile_number)) {
      newErrors.mobile_number = "Mobile number must be 10 digits.";
    }
    if (!data.User_Name.trim()) {
      newErrors.User_Name = "User name is required.";
    }
    if (!data.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (data.confirm_password !== data.password) {
      newErrors.confirm_password = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const { options } = useAppContext();


  const [selectedOption, setSelectedOption] = useState<string>("--Select Insurance Company--");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };


  const [state, changeState] = useState<JSX.Element | null>(null);
  const [register, setRegister] = useState<JSX.Element | null>(null);

  const changeStating = () => {
    state === null ? <Signup /> : null;
  }

  const handleDataChange = (data: boolean) => {
    setIsVerified(data);
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

        <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
          Corporate Registration
        </h2>
        <div>
          <form>
             <div className='flex flex-col leading-10'>
             <span>
             <label htmlFor="dropdown">Insurance Co* :</label>
            <select id="dropdown" value={selectedOption} onChange={handleChange} className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
              <option value="" className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho" >{selectedOption}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value} className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho outline-none border-none">
                  {option.label}
                </option>
              ))}
            </select>
             </span>

            <span>
            <label htmlFor="dropdown">Corporate Name :</label>
            <select id="dropdown" value={selectedOption} onChange={handleChange} className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
              <option value="" className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho" >{selectedOption}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value} className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho outline-none border-none">
                  {option.label}
                </option>
              ))}
            </select>
            </span>
             </div>
             <br/>

            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value})
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={data.lastName}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>

            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                name="Policy Number"
                type="text"
                placeholder="Policy Number"
                defaultValue={data.policy_number}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

              <input
                name="Card Number"
                type="text"
                placeholder="Card Number"
                defaultValue={data.card_number}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                name="Email ID"
                type="text"
                placeholder="Email ID"
                defaultValue={data.email_address}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

              <input
                name="Employee ID"
                type="text"
                placeholder="Employee ID"
                defaultValue={data.employee_id}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                name="Mobile Number"
                type="text"
                placeholder="Mobile Number"
                defaultValue={data.mobile_number}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

              <input
                name="User Name"
                type="text"
                placeholder="User Name"
                defaultValue={data.User_Name}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />
            </div>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                name="password"
                type="password"
                placeholder="Password"
                defaultValue={data.password}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

              <input
                name="password"
                type="password"
                placeholder="Confirm Password"
                defaultValue={data.confirm_password}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.defaultValue })
                }
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              />

            </div>
            <ReCaptcha onDataChange={handleDataChange}/>

            <div className="flex flex-wrap gap-10 ml-0 xl:gap-15">
              <div className="mb-4 flex items-center">

              </div>

              <button
                aria-label="signup with email and password"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho left-4"
                onClick={changeStating}
              >
                Back
              </button>
              {/*<Link href="/auth/signin">*/}
                <button
                  aria-label="signup with email and password"
                  className="inline-flex items-center gap-2.5 ml-90 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  disabled={!isVerified}

                >
                  Register
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              {/*</Link>*/}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CorporateEmpRegistration
