"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import { useAppContext } from '@/Context/context';

const CorporateEmpRegistration = () => {

  const [data, setData] = useState({
      firstName: "",
      lastName: "",
      policy_number: "",
      card_number: "",
      Emp_ID:"",
      Email_Address:"",
      Mobile_Number:"",
      User_Name:"",
      password:"",
      confirm_password:""
    });
    const {options}=useAppContext();

    const [selectedOption, setSelectedOption] = useState<string>("--Select Insurance Company--");
    
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
      };

      
        const [state, changeState] = useState<JSX.Element | null>(null);
        const [register,setRegister]=useState<JSX.Element | null>(null);
      
        const changeStating=()=>{
            state===null?<Signup/>:null;
        }
  
  return (
    <div className='mt-30'>
      <form>
        <label htmlFor="dropdown">Insurance Co.* :</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange} className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
          <option value="" className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho" >{selectedOption}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho outline-none border-none">
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />
        <label htmlFor="dropdown">Insurance Co.* :</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange} className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
          <option value="" className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho" >{selectedOption}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho outline-none border-none">
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />

        <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
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
            name="Agent Code"
            type="text"
            placeholder="Agent Code"
            defaultValue={data.policy_number}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.defaultValue})
            }
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />

          <input
            name="Email"
            type="email"
            placeholder="Email Address"
            defaultValue={data.Email_Address}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.defaultValue })
            }
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />
        </div>
        <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
          <input
            name="Mobile No"
            type="text"
            placeholder="Mobile Number"
            defaultValue={data.Mobile_Number}
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
                <Link href="/auth/signin">
                <button
                  aria-label="signup with email and password"
                  className="inline-flex items-center gap-2.5 ml-90 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
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
                </Link>
        </div>
      </form>
    </div>
  )
}

export default CorporateEmpRegistration
