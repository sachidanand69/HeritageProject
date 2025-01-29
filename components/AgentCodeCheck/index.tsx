"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const AgentCode = () => {

      const [agentCode, setAgentCode] = useState("");
      const [isCodeValid, setIsCodeValid] = useState(false);
      const [agentData, setAgentData] = useState<any>(null);
      const [password, setPassword] = useState("");
    
      const router = useRouter();
      const validateAgentCode = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${agentCode}`);
          if (!response.ok) {
            throw new Error("Contact with TPA");
          }
          const data = await response.json();
          
          if (data) {
            setIsCodeValid(true);
            setAgentData(data);
            router.push("/auth/agent");
          } else {
            throw new Error("Contact with TPA");
          }
        } catch (error) {
          setIsCodeValid(false);
          setAgentData(null);
          alert(error.message);
        }
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!password) {
          alert("Please enter a password");
          return;
        }
        
        const response = await fetch("/api/register-agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...agentData, password })
        });
        
        if (response.ok) {
          alert("Registration successful");
        } else {
          alert("Registration failed");
        }
      };

  
  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Agent/Broker Registration</h2>
      {(
        <div>
          {/* <label className="block text-sm font-medium">Agent/Broker Code:</label> */}
          <input
            type="text"
            value={agentCode}
            onChange={(e) => setAgentCode(e.target.value)}
            className="w-full border-b p-2 rounded mt-1 focus-visible:outline-none bg-transparent dark:focus:placeholder:text-white  focus:border-waterloo"
            placeholder="Enter Agent/Broker Code"
          />
          <button
            onClick={validateAgentCode}
            className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
          >
            Check
          </button>
        </div>
      )}
    </div>
    </section>
  )
}

export default AgentCode;
