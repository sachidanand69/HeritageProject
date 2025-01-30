"use client"
import { useAppContext } from "@/Context/context";
import Image from "next/image";
import React, { useState } from "react";

interface FormValues {
  grievance: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  empID: string;
  insuranceCo: string;
  policyNumber: string;
  cardNumber: string;
  claimNumber: string;
  contactNo: string;
  emailAddress: string;
  grievanceBrief: string;
}

const GrievanceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    grievance: "",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    empID: "",
    insuranceCo: "",
    policyNumber: "",
    cardNumber: "",
    claimNumber: "",
    contactNo: "",
    emailAddress: "",
    grievanceBrief: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Here, you can handle form submission, e.g., make API calls.
  };

  const {options}=useAppContext();

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
              
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6">Grievance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <select
            name="grievance"
            value={formData.grievance}
            onChange={handleChange}
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
          >
            <option value="">Nature of Grievance *</option>
            <option value="Issue">CARD</option>
            <option value="Query">CLAIM</option>
            <option value="Complaint">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr.</option>
            <option value="Ms">Ms.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </select>
        </div>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name *"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              placeholder="Middle Name"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name *"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="empID"
              value={formData.empID}
              placeholder="EmpID "
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>
        </div>

        {/* <div className="mb-4">
          <select
            name="insuranceCo"
            value={formData.insuranceCo}
            onChange={handleChange}
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            required
          >
            <option value="">--Select Insurance Company--</option>
            <option value="CompanyA">Company A</option>
            <option value="CompanyB">Company B</option>
            <option value="CompanyC">Company C</option>
          </select>
        </div> */}

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              placeholder="Policy Number"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              placeholder="Card Number"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="claimNumber"
              value={formData.claimNumber}
              placeholder="Claim Number"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              placeholder="Contact No"
              onChange={handleChange}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            placeholder="Email Address *"
            onChange={handleChange}
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Brief on Grievance</label>
          <textarea
            name="grievanceBrief"
            value={formData.grievanceBrief}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </section>
  );
};

export default GrievanceForm;