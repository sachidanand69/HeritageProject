"use client"
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

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6">Grievance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nature of Grievance *</label>
          <select
            name="grievance"
            value={formData.grievance}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Please Select</option>
            <option value="Issue">Issue</option>
            <option value="Query">Query</option>
            <option value="Complaint">Complaint</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Please Select</option>
            <option value="Mr">Mr.</option>
            <option value="Ms">Ms.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </select>
        </div>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">EmpID (For Corporate Employee only)</label>
            <input
              type="text"
              name="empID"
              value={formData.empID}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Insurance Company *</label>
          <select
            name="insuranceCo"
            value={formData.insuranceCo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">--Select Insurance Company--</option>
            <option value="CompanyA">Company A</option>
            <option value="CompanyB">Company B</option>
            <option value="CompanyC">Company C</option>
          </select>
        </div>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Policy Number</label>
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Claim Number</label>
            <input
              type="text"
              name="claimNumber"
              value={formData.claimNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </section>
  );
};

export default GrievanceForm;