// NewTempleConstruction.jsx

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

// Placeholder images — replace with your real ones
import templeSite from "../assets/new_temple2.jpg";
import foundation from "../assets/gaur.jpg";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";

const contact = {
  address:
    "Sri Sri Radha Murlidhar Mandir, Mohit Nagar, Near Radha krishna Residency, Ring Road, Bhusawal, Maharashtra 425201",
  phone: "+91-9011219587 / +91-7767043798",
  email: "infoiskcon.bhusawal@gmail.com",
};

function NewTempleConstruction() {
  const youtubeVideoId = "8ZUbkxtZeLk";
  const [selectedDonation, setSelectedDonation] = useState(null);

  const donationOptions = [
    { id: "1sqft", label: "1 sq ft", amount: "₹1,500" },
    { id: "2sqft", label: "2 sq ft", amount: "₹2,800" },
    { id: "pillar", label: "Pillar Sponsorship", amount: "₹25,000" },
    { id: "altar", label: "Altar / Shrine Sponsorship", amount: "₹1,00,000" },
  ];

  function handleDonateClick(opt) {
    setSelectedDonation(opt);
    // you could open a modal / redirect to donate page etc.
    alert(`You selected donation: ${opt.label} (${opt.amount})`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 pb-16">
      {/* Hero / Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={templeSite}
          alt="Temple site"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            New Temple Construction
            <br />
            <span className="text-2xl font-light">Sri Sri Radha Murlidhar, Bhusawal</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-amber-200">
            A place to awaken spiritual joy & peace
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 mt-12 space-y-16">
        {/* Video / Visual Progress */}
        {/* Video / Visual Progress (Full Width) */}
        {/* Video / Visual Progress (Full Width, No Scrollbar) */}
        <section className="w-full py-8 bg-white mt-12 overflow-x-hidden">
          <h2 className="text-3xl font-serif text-indigo-900 text-center mb-6">
            Proposed Plan
          </h2>
          <div className="relative w-full">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Proposed Plan"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[80vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh] object-cover rounded-none"
              style={{ display: "block" }}
            />
          </div>
        </section>




        {/* Features Graphical Showcase */}
        {/* <section className="space-y-6">
          <h3 className="text-2xl font-serif text-indigo-900">Temple Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <img
                src={foundation}
                alt="Foundation"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="mt-4 font-semibold text-indigo-800">Strong Foundation</h4>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <img
                src={designRender}
                alt="Design Render"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="mt-4 font-semibold text-indigo-800">Traditional Design</h4>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <img
                src={donationWall}
                alt="Donation Wall sample"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="mt-4 font-semibold text-indigo-800">
                Donation Wall / Floor Plan
              </h4>
            </div>
          </div>
        </section> */}

        {/* Donation Options */}
        {/* <section className="space-y-6">
          <h3 className="text-2xl font-serif text-indigo-900">How You Can Contribute</h3>
          <p className="text-gray-700 leading-relaxed">
            Pick a block (sq ft) or sponsor structural elements like pillars or altar. Your donation is immortalized as a part of this sacred structure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {donationOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleDonateClick(opt)}
                className="border-2 border-amber-600 rounded-lg p-6 hover:bg-amber-100 transition"
              >
                <div className="text-xl font-semibold">{opt.label}</div>
                <div className="mt-2 text-lg text-indigo-800">{opt.amount}</div>
              </button>
            ))}
          </div>
          {selectedDonation && (
            <div className="mt-4 text-center text-indigo-900">
              Selected: <strong>{selectedDonation.label}</strong> — {selectedDonation.amount}
            </div>
          )}
        </section> */}

        {/* Timeline / Milestones */}
        {/* <section className="space-y-6">
          <h3 className="text-2xl font-serif text-indigo-900">Timeline & Milestones</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="mt-1 text-amber-700" />
              <span>
                <strong>Jan 2024:</strong> Groundbreaking & foundation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="mt-1 text-amber-700" />
              <span>
                <strong>Mid 2024:</strong> Structural frame & walls
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="mt-1 text-amber-700" />
              <span>
                <strong>Late 2024:</strong> Decorative & finishing work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="mt-1 text-amber-700" />
              <span>
                <strong>Early 2025 (expected):</strong> Consecration & opening
              </span>
            </li>
          </ul>
        </section> */}

        <img
          src={d3}
          alt="Donation Wall sample"
          className="w-full h-full object-cover rounded"
        />
        <img
          src={d2}
          alt="Donation Wall sample"
          className="w-full h-full object-cover rounded"
        />

 {/* “View More” Button */}
 <div className="flex justify-center">
          <Link to="/donation">
            <button className="py-2 px-5 border border-black rounded-full text-sm text-black font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white hover:text-[#d1a664]">
              Donate for Temple Construction
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path
                  d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Contact / Support */}
        <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start gap-6">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-3xl text-indigo-900" />
            <div>
              <h4 className="text-lg font-semibold text-indigo-900">Address</h4>
              <p className="text-gray-700">{contact.address}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-auto space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-700" /> <span>{contact.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-700" /> <span>{contact.email}</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NewTempleConstruction;
