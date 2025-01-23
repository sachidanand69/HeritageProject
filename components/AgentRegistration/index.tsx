"use client";
import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import StoreContextProvider, { StoreContext, useAppContext } from '@/Context/context';
// import { DropdownProps } from '../Auth/Signup';
type StoreContextType = {
  options: { value: number; label: string }[];
};


const AgentRegistration = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    agent_Code: "",
    email: "",
    mobile_no:"",
    user_name:"",
    password:"",
    confirm_password:""
  });

  const {options}=useAppContext();

  const [selectedOption, setSelectedOption] = useState<any>("--Select Insurance Company--");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };


  const [state, changeState] = useState<JSX.Element | null>(null);
  const [register,setRegister]=useState<JSX.Element | null>(null);

  const changeStating=()=>{
      setData({firstName:"",lastName:"",agent_Code:"",email:"",mobile_no:"", user_name:"",password:"", confirm_password:""})
  }
  

  return (
    <div className='mt-40'>
      <form>

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
            defaultValue={data.agent_Code}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.defaultValue})
            }
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />

          <input
            name="Email"
            type="email"
            placeholder="Email Address"
            defaultValue={data.email}
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
            defaultValue={data.mobile_no}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.defaultValue })
            }
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />

          <input
            name="User Name"
            type="text"
            placeholder="User Name"
            defaultValue={data.user_name}
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
                  // aria-label="signup with email and password"
                  type='button'
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho left-4"
                  onClick={()=>{
                    setData({firstName:"",lastName:"",agent_Code:"",email:"",mobile_no:"", user_name:"",password:"", confirm_password:""})
                }}
               >
                  Reset
                </button>
                
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
                
        </div>
      </form>
    </div>
  )
}

export default AgentRegistration
