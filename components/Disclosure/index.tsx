'use client';

import Image from 'next/image';
import Link from 'next/link';


const Disclosure = () => {
    const links = [
        { name: 'National Insurance Company', href: 'https://nationalinsurance.nic.co.in/sites/default/files/Standards%20for%20hospitals%20in%20the%20provider%20network%20-%20Disclosure%20of%20Quality%20Parameters.xlsx' },
        { name: 'The Oriental Insurance Company', href: 'https://orientalinsurance.org.in/web/guest/network-hospitals?isSelected=onlineProducts&amp;isRefresh=true' },
        { name: 'United India Insurance Company', href: 'https://uiic.co.in/en/disclosure-of-quality-parameters-of-network-hospitals' },
        { name: 'The New India Assurance Company', href: 'https://www.newindia.co.in/portal/readMore/PublicDisclosure' },
        { name: 'SBI General Insurance Company Limited', href: 'https://content.sbigeneral.in/uploads/f3dc46ae141d43bc9e0db27e593faf20.pdf' },
        { name: 'IFFCO-Tokio General Insurance Company Limited', href: 'https://www.iffcotokio.co.in/health-insurance/network-hospital-quality-parameters' },
    ];

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
                <div className="min-h-screen flex items-center justify-center p-6">
                    <div className=" shadow-lg rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Disclosure</h2>
                        <p className="text-lg font-semibold text-center text-gray-700">Disclosure of Quality Parameters</p>
                        <p className="text-sm text-center text-gray-600 mb-4"></p>
                        <ul className="space-y-3">
                            {links.map((link, index) => (
                                <li key={index} className="text-center">
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-lg font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disclosure;
