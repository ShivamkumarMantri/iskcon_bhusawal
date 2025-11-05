// SpiritualStudyCenter.jsx

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Replace with your real image assets
import heroImg from "../assets/gaur.jpg";
import gitaStudy from "../assets/gaur.jpg";
import bhagavatamStudy from "../assets/gaur.jpg";
import retreat from "../assets/gaur.jpg";

const contactInfo = {
  address:
    "Sri Sri Radha Murlidhar Mandir, Near Roop Darshan Photo Studio, Ram Mandir Ward, Bhusawal, Maharashtra 425201",
  phone: "+91-77670-43798 / +91-77458-96220",
  email: "iskcon.bhusawal@gmail.com",
};

function SpiritualStudyCenter() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 pb-16">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={heroImg}
          alt="Spiritual learning"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white text-center leading-tight">
            Spiritual Study Center <br />
            in Bhusawal
          </h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Introduction */}
        <section className="text-center space-y-4">
          <p className="text-xl text-gray-700">
            Connect with us to gain the essence of <strong>Bhagavad-Gita</strong> & <strong>Srimad Bhagavatam</strong>.
          </p>
          <button
            onClick={() => setShowEnrollModal(true)}
            className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-medium transition"
          >
            Enroll Now
          </button>
        </section>

        {/* Study Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gita */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={gitaStudy}
              alt="Bhagavad-Gita study"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-serif text-indigo-900">Bhagavad-Gita Study</h2>
              <p className="text-gray-700 leading-relaxed">
                Dive deep into the Gita’s verses, understand the message of karma, dharma, devotion, and self-realization. Weekly classes led by experienced scholars, with discussions, memorization, and real-life application.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Verse by verse analysis with commentary</li>
                <li>Group discussion & Q&A sessions</li>
                <li>Practical meditations & reflections</li>
              </ul>
            </div>
          </div>

          {/* Bhagavatam */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={bhagavatamStudy}
              alt="Srimad Bhagavatam study"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-serif text-amber-800">Srimad Bhagavatam Study</h2>
              <p className="text-gray-700 leading-relaxed">
                Explore the divine pastimes, theology, and devotional messages from the Srimad Bhagavatam. Classes include storytelling, reflection, and guidance for integrating teachings into daily life.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Katha sessions with commentary</li>
                <li>Scripture memorization & recitation</li>
                <li>Devotional art, poetry, and reflections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Retreat / Immersion */}
        <section className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <img
            src={retreat}
            alt="Spiritual retreat"
            className="w-full md:w-1/3 h-48 md:h-auto object-cover"
          />
          <div className="p-6 flex-1 space-y-4">
            <h2 className="text-2xl font-serif text-indigo-900">Retreat / Immersion Programs</h2>
            <p className="text-gray-700 leading-relaxed">
              Periodic retreats to deepen your study and practice. Extended sessions in serene surroundings, with immersive classes, meditation, kirtan, and spiritual camaraderie.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>3–7 day spiritual retreats</li>
              <li>Intensive study + meditation schedule</li>
              <li>Nature walks, reflection, and group sharing</li>
            </ul>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="px-5 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition"
            >
              Explore Retreats
            </button>
          </div>
        </section>

        {/* Schedule / Timing */}
        <section>
          <h3 className="text-3xl font-serif text-indigo-900 mb-4">Weekly Schedule (Sample)</h3>
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-3">Day</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Session</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4">Tuesday</td>
                  <td className="px-6 py-4">7:00 PM – 8:00 PM</td>
                  <td className="px-6 py-4">Bhagavad-Gita class</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Thursday</td>
                  <td className="px-6 py-4">7:00 PM – 8:00 PM</td>
                  <td className="px-6 py-4">Bhagavatam class</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Sunday</td>
                  <td className="px-6 py-4">5:00 PM – 7:00 PM</td>
                  <td className="px-6 py-4">Combined discourse + kirtan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact / Connect */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:flex md:items-center">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-3xl text-indigo-700 mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-indigo-900">Center Address</h4>
              <p className="text-gray-700">{contactInfo.address}</p>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-auto space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-700" /> <span>{contactInfo.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-700" /> <span>{contactInfo.email}</span>
            </p>
          </div>
        </section>
      </main>

      {/* Modal for Enroll / Contact */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-4">
            <h3 className="text-xl font-semibold">Enroll / Contact</h3>
            <p className="text-gray-700">
              Please share your name, contact, and preference (Gita, Bhagavatam, Retreat), and we’ll get back to you.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Add your submit logic
                alert("Thank you for connecting! We'll reach out soon.");
                setShowEnrollModal(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (e.g. +91-...)"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <select
                name="preference"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
              >
                <option value="">Select preference</option>
                <option value="Gita">Bhagavad-Gita Study</option>
                <option value="Bhagavatam">Srimad Bhagavatam Study</option>
                <option value="Retreat">Retreat / Immersion</option>
              </select>
              <textarea
                name="notes"
                placeholder="Any note / question"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                rows={2}
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEnrollModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpiritualStudyCenter;
