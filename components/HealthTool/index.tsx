"use client"
import React, { useState } from 'react'

const HealthTool = () => {

  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const convertToMetric = (weight: string, heightFeet: string, heightInches: string) => {
    const weightInKg = weight ? (parseFloat(weight) * 0.453592).toFixed(2) : "";
    const heightInCm = heightFeet && heightInches ? ((parseFloat(heightFeet) * 30.48) + (parseFloat(heightInches) * 2.54)).toFixed(2) : "";
    setWeightKg(weightInKg);
    setHeightCm(heightInCm);
  };

  const convertToImperial = (weight: string, height: string) => {
    const weightInLbs = weight ? (parseFloat(weight) * 2.20462).toFixed(2) : "";
    const heightTotalInches = height ? parseFloat(height) / 2.54 : 0;
    const feet = Math.floor(heightTotalInches / 12);
    const inches = Math.round(heightTotalInches % 12);
    setWeightLbs(weightInLbs);
    setHeightFeet(feet.toString());
    setHeightInches(inches.toString());
  };

  const calculateBMI = () => {
    if (!weightKg || !heightCm) {
      setBmi(null);
      setCategory("Please enter your weight and height in the fields to the left.");
      return;
    }

    const heightInMeters = parseFloat(heightCm) / 100;
    const bmiValue = parseFloat(weightKg) / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(2)));
    
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
       <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md flex gap-6">
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
        <div className="mb-2">
          <label className="block text-sm font-medium">Weight (kg):</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => { setWeightKg(e.target.value); convertToImperial(e.target.value, heightCm); }}
            className="w-full border p-2 rounded"
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Weight (lbs):</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => { setWeightLbs(e.target.value); convertToMetric(e.target.value, heightFeet, heightInches); }}
            className="w-full border p-2 rounded"
            placeholder="Enter weight in lbs"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Height (cm):</label>
          <input
            type="number"
            value={heightCm}
            onChange={(e) => { setHeightCm(e.target.value); convertToImperial(weightKg, e.target.value); }}
            className="w-full border p-2 rounded"
            placeholder="Enter height in cm"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Height (feet & inches):</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={heightFeet}
              onChange={(e) => { setHeightFeet(e.target.value); convertToMetric(weightLbs, e.target.value, heightInches); }}
              className="border p-2 rounded w-1/2"
              placeholder="Feet"
            />
            <input
              type="number"
              value={heightInches}
              onChange={(e) => { setHeightInches(e.target.value); convertToMetric(weightLbs, heightFeet, e.target.value); }}
              className="border p-2 rounded w-1/2"
              placeholder="Inches"
            />
          </div>
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
        >
          Calculate BMI
        </button>
      </div>
      <div className="w-1/3 border-l pl-4">
        <p className="text-sm font-semibold">BMI Categories:</p>
        <ul className="text-sm">
          <li>Underweight: &lt; 18.5</li>
          <li>Normal weight: 18.5 - 24.9</li>
          <li>Overweight: 25 - 29.9</li>
          <li>Obese: ≥ 30</li>
        </ul>
        {bmi !== null && (
          <div className="mt-4 p-2 border rounded">
            <p className="text-lg font-semibold">Your BMI: {bmi}</p>
            <p className="text-md">Category: {category}</p>
          </div>
        )}
      </div>
    </div>

    </section>
  )
}

export default HealthTool
