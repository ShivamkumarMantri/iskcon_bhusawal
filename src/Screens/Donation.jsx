import React from "react";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";

function Donation() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-12 px-4 md:px-16">
      <h1 className="text-4xl font-serif text-indigo-900 text-center mb-10">
        मंदिर निर्माण में योगदान करें
      </h1>

      {/* Donation Brochure Images */}
      <div className="flex flex-col items-center space-y-8">
        <img
          src={d3}
          alt="Donation Brochure Page 1"
          className="rounded-lg shadow-xl w-full max-w-5xl"
        />
        <img
          src={d2}
          alt="Donation Brochure Page 2"
          className="rounded-lg shadow-xl w-full max-w-5xl"
        />
      </div>

      {/* Donation Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
          अपनी सेवा अब ऑनलाइन अर्पित करें 🙏
        </h2>
        <p className="text-gray-700 mb-6">
          श्रीकृष्ण भावनामृत मंदिर (ISKCON) भुसावल के नव मंदिर निर्माण में अपना
          योगदान देकर इस पुण्य कार्य का हिस्सा बनें।
        </p>

        {/* PhonePe Payment Link */}
        <a
          href="https://phon.pe/your-donation-link" // Replace with your actual PhonePe link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Donate via PhonePe
        </a>

        <p className="text-sm text-gray-600 mt-4">
          (आपको PhonePe के माध्यम से मंदिर के खाते में दान भेजने के लिए रीडायरेक्ट किया जाएगा)
        </p>
      </div>
    </section>
  );
}

export default Donation;
