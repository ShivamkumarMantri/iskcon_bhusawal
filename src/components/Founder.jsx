import React from 'react';
import img from "../assets/2.jpg";

function Founder() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left Text Section */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 text-center lg:text-left">
              Our Founder Acharya
            </h2>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 text-center lg:text-left">
              HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI PRABHUPADA
            </h4>

            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Srila Prabhupada (1896–1977) was an extraordinary personality who dedicated his life to teaching the world about Krishna consciousness — ancient India’s most noble message of spiritual wisdom. In 1965, at the age of 69, he sailed from India to New York to share Lord Krishna’s message, following the order of his spiritual master, Srila Bhaktisiddhanta Saraswati Thakura, representing a line of teachers dating back to Lord Krishna Himself.
            </p>

            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Srila Prabhupada’s most significant contribution, however, is his books. Highly respected by scholars for their authority, depth, and clarity, they are used as textbooks in numerous college courses. His writings have been translated into over fifty languages, making the Bhaktivedanta Book Trust — founded in 1972 — the world’s largest publisher of books on Indian religion and philosophy.
            </p>

            <p className="text-gray-700 text-base leading-relaxed text-justify">
              In just twelve years, despite his advanced age, Srila Prabhupada circled the globe fourteen times on lecture tours to six continents — all while continuing to write prolifically. His works form a vast library of Vedic philosophy, literature, and culture that continues to inspire millions.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full sm:w-4/5 lg:w-full group">
              <img
                src={img}
                alt="Srila Prabhupada"
                className="rounded-3xl shadow-xl object-cover w-full h-full transform transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
