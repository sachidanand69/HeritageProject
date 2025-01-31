"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "@/Context/context";

const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const getparam = useSearchParams();
  const paths = getparam.get("paths");

  const { setDetails, setLogin } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload
    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch(`https://faux-api.com/api/v1/agentsreg_005388653310497427`, {
        method: "POST", // Changed from GET to POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const settingdata = await response.json();

      if (response.ok) {
        setDetails(settingdata);
        setAlert({ type: "success", message: "Login successful!" });
        setLogin(true);
        router.push("/");
      } else {
        setAlert({ type: "error", message: settingdata.message || "Invalid credentials!" });
      }
    } catch (error) {
      setAlert({ type: "error", message: "Something went wrong. Please try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-12">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-center mb-6">Login to Your Account</h2>

          {alert && (
            <div className={`p-3 mb-4 text-white rounded ${alert.type === "error" ? "bg-red-500" : "bg-green-500"}`}>
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User ID"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full p-3 border rounded mb-4"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full p-3 border rounded mb-4"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-blue-600 text-white rounded"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <a href={paths || "#"} className="text-blue-600">
                Sign Up
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Signin;



