// File: src/pages/Payment.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Payment() {
  const handlePayment = async () => {
    const options = {
      key: "rzp_test_YourKeyHere", // 🔁 Replace with your Razorpay Test Key
      amount: 799900, // 7999 INR in paise
      currency: "INR",
      name: "DPFX Academy",
      description: "E-LITE Forex Training Access",
      image: "https://yourcdn.com/logo.png", // Optional: Your logo URL
      handler: function (response) {
        alert("✅ Payment Successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Yokeshwar L",
        email: "sparkindustry6@gmail.com",
        contact: "8148502407",
      },
      notes: {
        course: "E-LITE ACCESS",
      },
      theme: {
        color: "#0ea5e9",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-3 uppercase tracking-wide">
          E-LITE ACCESS 🔥
        </h1>
        <p className="text-green-400 text-lg font-semibold mb-6">
          🚀 Includes Funded Account + Weekly Live Trading + Lifetime Mentorship
        </p>

        <div className="bg-white/5 border border-white/10 p-8 rounded-xl space-y-4 max-w-xl mx-auto shadow-xl">
          <p className="text-yellow-400 text-3xl font-bold">
            ₹7,999
            <span className="line-through text-red-400 text-base ml-2 font-normal">
              ₹15,999
            </span>
          </p>
          <ul className="text-left text-sm md:text-base text-gray-300 space-y-2">
            <li>✅ 1 Month Pro Forex Training</li>
            <li>✅ Live Chart Analysis + Case Studies</li>
            <li>✅ DPFX Institutional Strategy Access</li>
            <li>✅ Support through WhatsApp + Weekly Calls</li>
            <li>✅ Certificate + Trading Journal Template</li>
          </ul>
        </div>

        <button
          onClick={handlePayment}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 hover:brightness-110 text-white text-lg font-bold rounded-xl shadow-lg transition duration-300"
        >
          Pay ₹7999 & Enroll Now
        </button>

        <div className="mt-10 text-white text-sm md:text-base space-y-2">
          <p>📞 <span className="text-blue-400">8148502407 / 6369181399</span></p>
          <p>📧 <span className="text-yellow-400">Sparkindustry6@gmail.com</span></p>
          <p>📸 <span className="text-pink-400">@dpfx.__trds</span></p>
        </div>

        <p className="mt-8 text-gray-400 italic text-xs">
          ⏳ Access will be granted within 24 hours after successful payment. You will be contacted on WhatsApp for onboarding.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          📜 By enrolling, you agree to our{" "}
          <span className="underline text-blue-300 cursor-pointer">
            Terms & Conditions
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
}
