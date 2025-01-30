'use client';
import Image from 'next/image';
import React from 'react'

const RohiniRegistration = () => {
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

                <div className="w-full border-b ml-10 border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white">
                    <h2 className="text-2xl font-semibold text-center mb-4">Have you registered with ROHINI?</h2>
                    <p className="mb-4">
                        All the Network Hospitals have to be registered in ROHINI BY 31.12.2016 as per CHAPTER IV of
                        Guidelines on Standardization in Health Insurance released on dated 29.07.2016 Ref: <span style={{ color: "blue" }}>IRDA/HLT/REG/CIR/146/07/2016</span>,
                        <b>which is further extended to 31.03.2017 vide circular no IRDA/HLT/GDL/CIR/257/12/2016 dt 29/12/2016.</b>
                    </p>
                    <p className="mb-4">
                        Accordingly, please complete the registration and share your ROHINI ID with Heritage Health Insurance TPA Pvt. Ltd.
                        by 31.03.2017. If you are not already registered, you can use the following link to complete the registration process urgently:
                        <a href="https://rohini.iib.gov.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            https://rohini.iib.gov.in
                        </a>
                    </p>
                    <p className="mb-4">
                        If there are any issues to be clarified, you may please email to
                        <a href="mailto:rohini@lib.gov.in" className="text-blue-600 hover:underline"> rohini@lib.gov.in</a> and/or call the following helpdesk.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Support Desk</h3>
                    <table className="w-full border border-gray-300 mb-4">
                        <tbody>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Support Desk</td>
                                <td className="p-2">011-42890848</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Escalation:</td>
                                <td className="p-2"></td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2">Level - 1</td>
                                <td className="p-2">Mr. Nitesh Aggarwal - 011-42890824</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2">Level - 2</td>
                                <td className="p-2">Mr. Bijoy Peter - 011-42890829</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mb-4 font-semibold">Helpdesk support available from 09:30 AM to 6:00 PM (MONDAY TO FRIDAY)</p>

                    <h3 className="text-xl font-semibold mb-2">Additional Support</h3>
                    <table className="w-full border border-gray-300">
                        <tbody>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Support Desk</td>
                                <td className="p-2">033 22486430</td>
                            </tr>
                            <tr>
                                <td className="p-2">Mr. J. Kundu</td>
                                <td className="p-2">+91 9830849667</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href='https://rohini.iib.gov.in/' target='_blank'>
                <img
                    src="/images/global/RohiniLogo.jpg"
                    className='content-center mx-auto'
                    alt=""
                />
            </a>
        </section>
    );
};

export default RohiniRegistration;
