import React from 'react';
import img2 from '../assets/new_temple2.jpg'; // Update path if needed

function TempleIntro() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fffaf3] to-[#f9f4e7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a3e1b] leading-snug mb-4">
            Vrindavan in Bhusawal
          </h2>
          <div className="mx-auto w-24 h-1 bg-[#d1a664] rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 lg:max-w-3xl lg:mx-auto mb-4">
            The Sri Sri Radha Murlidhar Mandir, situated in Bhusawal, holds a special
            significance for the devotees of the International Society for Krishna Consciousness.
          </p>
          <p className="text-base md:text-lg text-gray-600 lg:max-w-3xl lg:mx-auto">
            We conduct courses, seminars, and workshops for all — kids, youth, and families.
            Dine at our international restaurant, celebrate your occasion at the temple, or
            join us for any of our spiritual tours. Let’s together enhance the divine dimension
            of our lives.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Big Feature Card */}
          <div className="relative w-full md:col-span-2 rounded-2xl overflow-hidden group">
            <div className="bg-[#d1a664] flex flex-col md:flex-row justify-between h-full transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
              {/* Text */}
              <div className="p-6 xl:p-10 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    New Temple Construction!
                  </h3>
                  <p className="text-sm text-white/90 mb-8">
                    A new temple dedicated to Sri Sri Radha Murlidhar is being constructed
                    in Bhusawal — a place to awaken spiritual joy and peace.
                  </p>
                </div>
                <button className="self-start py-2 px-5 border border-white rounded-full text-sm text-white font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white hover:text-[#d1a664]">
                  View More
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
              </div>

              {/* Image */}
              <div className="relative w-full md:w-1/2 overflow-hidden">
                <img
                  src={img2}
                  alt="Temple Construction"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="bg-[#c2935a] rounded-2xl p-6 xl:p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Spiritual Study Center In Bhusawal
            </h3>
            <p className="text-sm mb-8 text-white/90">
              Connect with us to gain the essence of Bhagavad-Gita & Srimad Bhagavatam.
            </p>
            <button className="py-2 px-5 border border-white rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white hover:text-[#c2935a]">
              View More
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
          </div>

          <div className="bg-[#b3804f] rounded-2xl p-6 xl:p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Cultivate Children from Young Age
            </h3>
            <p className="text-sm mb-8 text-white/90">
              Our courses nurture spiritual values and discipline in children from a young age.
            </p>
            <button className="py-2 px-5 border border-white rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white hover:text-[#b3804f]">
              View More
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default TempleIntro;
