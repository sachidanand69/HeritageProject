'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { useAppContext } from "@/Context/context";
import { locations } from "./metadata";


const hospitalTypes = [
  { value: "blacklist", label: "Blacklisted" },
  { value: "ppn", label: "PPN" },
  { value: "empaneled", label: "Empaneled" },
];

export default function FindHospitals() {
  const [selectedCompany, setSelectedCompany] = useState<{ value: string; label: string } | null>(null);
  const [pinCode, setPinCode] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState<{ value: string; label: string } | null>(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHospitalType, setSelectedHospitalType] = useState<{ value: string; label: string } | null>(null);
  const router = useRouter();

  const {options,setHospitalList,hospitalList} = useAppContext()

  const stateOptions = Object.keys(locations).map((state) => ({
    value: state,
    label: state,
  }));

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const cityOptions = selectedState
    ? locations[selectedState.value].map((city) => ({
        value: city,
        label: city,
      }))
    : [];


  // Fetch states when pin code changes
  const handlePinCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const pin = e.target.value;
    setPinCode(pin);
  };

  // Fetch cities when state is selected
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
  };


  const handleSubmit = async () => {
    if (!selectedCompany || !selectedState || !selectedCity || !selectedHospitalType) {
      alert("Please fill all fields");
      return;
    }

    // Make API request to get hospitals
    const response = await fetch(`https://faux-api.com/api/v1/hospitalslist_005388653310497427/?state=${selectedState}&city=${selectedCity}&pincode=${pinCode}`);
    const data = await response.json();
    setHospitalList(data);
    // Navigate to the hospital list page
    router.push("/auth/hospitals");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Find Hospitals</h2>
      <Select
        options={options}
        value={selectedCompany}
        placeholder="Select Insurance Company"
        onChange={(selectedOption) => setSelectedCompany(selectedOption)}
      />

      <input type="text" placeholder="Pin Code" className="border p-2 w-full" value={pinCode} onChange={handlePinCodeChange} />

      <Select placeholder="Select State" options={stateOptions} onChange={handleStateChange} />

      {selectedState && (
        <>
          <Select placeholder="Select City" options={cityOptions} onChange={handleCityChange} />
        </>
      )}

      <Select placeholder="Hospital Type" options={hospitalTypes} onChange={setSelectedHospitalType} />

      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 w-full rounded">
        Submit
      </button>
    </div>
  );
}
