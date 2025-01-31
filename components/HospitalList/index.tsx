'use client';

import { useAppContext } from "@/Context/context";
import { useState } from "react";

interface Hospital {
    id: number;
    name: string;
    address: string;
    googleMapsLink: string;
}

const hospitals: Hospital[] = [
    {
        id: 1,
        name: "City Hospital",
        address: "123 Main St, New York, NY",
        googleMapsLink: "https://www.google.com/maps?q=123+Main+St,New+York,NY",
    },
    {
        id: 2,
        name: "Green Valley Clinic",
        address: "456 Elm St, Los Angeles, CA",
        googleMapsLink: "https://www.google.com/maps?q=456+Elm+St,Los+Angeles,CA",
    },
    {
        id: 3,
        name: "Sunrise Medical Center",
        address: "789 Pine St, Chicago, IL",
        googleMapsLink: "https://www.google.com/maps?q=789+Pine+St,Chicago,IL",
    },
];

const HospitalsList = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [allHospitals, setAllHospitals] = useState<{ 
        id: number; 
        hospitalname: string; 
        address: string; 
        city: string; 
        state: string; 
        contact: string; 
        hospitalquality: string; 
        pincode: string; 
        email: string; 
        type: string; 
        website: string; 
      }[]>([]); 

    const { hospitalList } = useAppContext();
    console.log(hospitalList.result);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
            <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20" style={{ top: 0 }}>
                <div className="p-4 max-w-4xl mx-auto relative">
                    <div className="grid grid-cols-3 bg-gray-200 p-4 font-bold" style={{ top: 100 }}>
                        <span>Hospital Name</span>
                        <span>Address</span>
                        <span>Navigation</span>
                    </div>
                    {hospitalList.result.map((hospital) => (
                        <div key={hospital.id} className="border rounded-lg shadow-md mt-2">
                            <div
                                className="grid grid-cols-3 p-4 bg-blue-500 text-white cursor-pointer"
                                onClick={() => toggleExpand(hospital.id)}
                            >
                                <span>{hospital.hospitalname}</span>
                                <span>{hospital.address}</span>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                            {expandedId === hospital.id && (
                                <div className="p-4 bg-white border-t">
                                    <p><strong>More details about {hospital.hospitalname}:</strong></p>
                                    <p>{hospital.contact}</p>
                                    <p>{hospital.email}</p>
                                    <p>{hospital.type}</p>
                                    <p>{hospital.hospitalquality}</p>
                                    <p>{hospital.pincode}</p>
                                    <p>{hospital.state}</p>
                                    <p>{hospital.city}</p>
                                    <p>{hospital.website}</p>                                 
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalsList;

