"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AgentRegistration from "../AgentRegistration";
import CorporateEmpRegistration from "../CorporateEmpRegistration";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const options=[{value:"agent",label:"agent"},{value:"corporate employee",label:"corporate employee"}]
    const [selectedOption, setSelectedOption] = useState<string>("--Please choose an option--");
    const [title, setTitle] = useState<string>("");
    const [state, changeState] = useState<JSX.Element | null>(null);
    const [links,setLinks]=useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelectedOption(value);
      value === "agent" ? setLinks('./agent') : setLinks('./grievances');
      
  };

  const handleChangeButton = () => {
      setTitle(selectedOption);
      title === "Agent" ? setLinks('./agent') : changeState(<CorporateEmpRegistration />);
  };

  const handleChangeOption = () => {
      setSelectedOption("--Please choose an option--");
  }

    const Register = <>
    <label htmlFor="dropdown">Registration For* :</label>
            <select id="dropdown" value={selectedOption} onChange={handleChange} className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
                <option value="" className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho" >{selectedOption}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="text-body-color dark:text-body-color-dark w-full px-5 text-center text-base bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho outline-none border-none">
                        {option.label}
                    </option>
                ))}
            </select>
            <br/>
            <br/>
            <br/>
            <Link href={links}><button className="inline-flex items-center gap-3.5 ml-50 p-15 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">Submit</button></Link>
            <button onClick={handleChangeOption} className="inline-flex items-center gap-3.5 ml-25 p-15 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">Reset</button>
    </>




  return (
    <>
      {/* <!-- ===== SignUp Form Start ===== --> */}
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

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            {title} Registration
            </h2>

            <div className="flex items-center gap-8">
            </div>
            <form>
            {state===null?Register:title==="Agent"?<AgentRegistration/>:<CorporateEmpRegistration/>}

              <div className="flex flex-wrap gap-10 md:justify-between xl:gap-15">
                <div className="mb-4 flex items-center">
                </div>
              </div>

              <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/auth/signin"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignUp Form End ===== --> */}
    </>
  );
};

export default Signup;
