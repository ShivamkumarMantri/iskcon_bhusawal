import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/gaur.jpg";
import wwt from "../assets/wwt.jpg";
import ffl from "../assets/ffl.jpg";

const IskconSociety = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
            What is ISKCON?
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The International Society for Krishna Consciousness (ISKCON), also known as
            the Hare Krishna Movement, is dedicated to spreading the teachings of
            Lord Krishna and promoting a life of devotion, peace, and compassion.
          </p>
        </div>
      </section>

      {/* About ISKCON */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          A Global Spiritual Movement
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada,
          ISKCON has grown into a worldwide confederation of over 600 temples,
          farms, schools, and communities. Rooted in the ancient Vedic wisdom of
          India, ISKCON focuses on the practice of Bhakti Yoga — the yoga of love
          and devotion to Lord Krishna.
        </p>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          The mission of ISKCON is to help every soul reconnect with their
          spiritual nature through chanting the Hare Krishna mantra, reading the
          Bhagavad-gita, and engaging in selfless devotional service.
        </p>
      </section>

      {/* ISKCON Bhusawal Section */}
      <section className="bg-white py-20 px-6 text-center shadow-inner">
        <h2 className="text-4xl font-bold text-[#d1a664] mb-4">
          ISKCON Bhusawal – Sri Sri Radha Murlidhar Mandir
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          ISKCON Bhusawal is a serene spiritual center dedicated to spreading the
          divine message of Lord Krishna. Devotees regularly gather for kirtans,
          Bhagavad-gita discourses, and festivals like Janmashtami and Ratha
          Yatra. The temple’s deity forms of Sri Sri Radha Murlidhar are the
          heart of devotion for the local community, inspiring love and service
          to the Supreme Lord.
        </p>
        <p className="text-gray-700 text-lg mt-4 max-w-4xl mx-auto leading-relaxed">
          The temple also conducts youth preaching, food distribution (prasadam),
          and cultural programs that aim to uplift society spiritually and
          morally.
        </p>
      </section>

      {/* Three Columns */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 py-20">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
          <img src={img1} alt="Bhakti Yoga" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#d1a664]">Bhakti Yoga</h3>
            <p className="text-gray-600 mt-3">
              A path of love and devotion toward God, expressed through chanting,
              prayer, and service. It connects the soul to Krishna in eternal joy.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
          <img src={wwt} alt="Temples Worldwide" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#d1a664]">Temples Worldwide</h3>
            <p className="text-gray-600 mt-3">
              With centers in over 100 countries, ISKCON inspires millions through
              cultural festivals, spiritual retreats, and vegetarian food programs.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
          <img src={ffl} alt="Food for Life" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#d1a664]">Food for Life</h3>
            <p className="text-gray-600 mt-3">
              ISKCON’s “Food for Life” initiative serves millions of free
              nutritious vegetarian meals daily, spreading compassion through food.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#d1a664] py-16 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Join the ISKCON Family
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Discover a life of peace, devotion, and joy through Krishna Consciousness.
          Participate in kirtans, spiritual discussions, and selfless service at
          ISKCON Bhusawal.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#d1a664] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Get Involved
        </Link>
      </section>
    </div>
  );
};

export default IskconSociety;
