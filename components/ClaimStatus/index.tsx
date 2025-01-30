'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ClaimStatus = () => {
    const [formData, setFormData] = useState({
        policyNumber: '',
        cardNumber: '',
        empID: '',
        policyYear: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const { policyNumber,
            cardNumber,
            empID,
            policyYear } = formData;
        if (!cardNumber || !empID || !policyYear || !policyNumber) {
            setAlert({ type: "error", message: "Invalid input or passwords do not match!" });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://faux-api.com/api/v1/claimstatus_005388653310497427", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([formData]),
            });
            const respon = await response.json();
            console.log(respon)

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormData({ policyNumber: '', cardNumber: '', empID: '', policyYear: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const policyYears = Array.from({ length: 14 }, (_, i) => {
        const startYear = 2017 + i;
        return `${startYear}-${startYear + 1}`;
    });

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
                <div className="max-w-lg mx-auto p-6  shadow-md rounded-lg bg-transparent">
                    <h2 className="text-2xl font-semibold text-center mb-4">Card/Claim Status</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* <div>
                            <label className="block font-medium">Insurance Co. *</label>
                            <select
                                name="insuranceCompany"
                                value={formData.insuranceCompany}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                            >
                                <option value="">--Select Insurance Company--</option>
                                <option value="Company A">Company A</option>
                                <option value="Company B">Company B</option>
                                <option value="Company C">Company C</option>
                            </select>
                        </div> */}
                        <div>

                            <input
                                type="text"
                                placeholder='Policy Number'
                                name="policyNumber"
                                value={formData.policyNumber}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder='Card Number'
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder='EmpID'
                                name="empID"
                                value={formData.empID}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                            />
                        </div>
                        <div>
                            <select
                                name="policyYear"
                                value={formData.policyYear}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white "
                            >
                                <option value="">--Select Policy Year--</option>
                                {policyYears.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default ClaimStatus;
