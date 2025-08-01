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
      image: "https://yourcdn.com/logo.png", // optional logo
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        // 🔁 You can navigate to success page or store payment in Firebase
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
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">FOREX TRADING - E-LITE ACCESS</h1>
        <p className="text-green-400 text-lg mb-6 font-semibold">
          🎁 Funded Account + Live Trading Session (Every Student)
        </p>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4 max-w-xl mx-auto">
          <p className="text-yellow-400 text-2xl font-bold">
            ₹7999 <span className="line-through text-red-400 text-base ml-2">₹15,999</span>
          </p>
          <p className="text-gray-300">⏳ Duration: 1 Month</p>
          <p className="text-white">📈 Learn Forex & Stock Trading with Experts</p>
        </div>

        <button
          onClick={handlePayment}
          className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg font-semibold transition duration-300"
        >
          Pay ₹7999 & Enroll Now
        </button>

        <div className="mt-10 text-white space-y-2 text-sm md:text-base">
          <p>📞 Contact: <span className="text-blue-400">8148502407 / 6369181399</span></p>
          <p>📧 Email: <span className="text-yellow-400">Sparkindustry6@gmail.com</span></p>
          <p>📸 Instagram: <span className="text-pink-400">@dpfx.__trds</span></p>
        </div>

        <p className="mt-6 text-gray-400 italic text-sm">
          Once payment is successful, you'll receive course access within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}
