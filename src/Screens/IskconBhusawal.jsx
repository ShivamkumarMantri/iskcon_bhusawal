import React from "react";
import { Link } from "react-router-dom";
import srilaPrabhupadaImage from "../assets/2.jpg";
import kirtanImage from "../assets/iskcon-kirtan.jpg";
import YouTubePlayer from "../components/YoutubePlayer";

const IskconBhusawal = () => {
  const VIDEO_ID = "hGc-HlFonvo";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-b from-[#d1a664] to-[#f5e0b8] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://iskconmumbai.com/images/bg-iskcon-temple.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            ISKCON Bhusawal
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto drop-shadow-md">
            A divine abode dedicated to Sri Sri Radha Murlidhar, spreading love
            and devotion through the teachings of Lord Krishna.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-4xl font-bold text-center text-[#b3804f]">
          About ISKCON Bhusawal
        </h2>
        <p className="mt-6 text-lg text-center text-gray-700 leading-relaxed">
          ISKCON Bhusawal is a branch of the International Society for Krishna
          Consciousness (ISKCON), founded by His Divine Grace A.C.
          Bhaktivedanta Swami Prabhupada. It serves as a spiritual oasis where
          people come to deepen their connection with Lord Krishna through
          devotional service, kirtan, and the study of sacred scriptures.
        </p>
      </section>

      {/* Spiritual Mission */}
      <section className="bg-[#f6edd9] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={srilaPrabhupadaImage}
            alt="Srila Prabhupada"
            className="rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
          <div>
            <h3 className="text-3xl font-semibold text-[#a46d3e]">
              Our Spiritual Mission
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Following the mission of Srila Prabhupada, ISKCON Bhusawal strives
              to spread the timeless wisdom of the Bhagavad Gita and Srimad
              Bhagavatam. Through kirtans, lectures, and prasadam distribution,
              we aim to bring peace, devotion, and joy to every heart.
            </p>
            <p className="mt-3 text-gray-600 italic">
              “Chant Hare Krishna and be happy.”
            </p>
          </div>
        </div>
      </section>

      {/* Events and Programs */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#b3804f]">
            Regular Programs & Events
          </h3>
          <p className="mt-4 text-gray-700 text-lg">
            Join our spiritual gatherings and experience the bliss of devotion.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "Morning & Evening Aarti",
                desc: "Daily mangal and sandhya aarti filled with melodious bhajans.",
              },
              {
                title: "Bhagavad Gita Classes",
                desc: "Understand life’s purpose through timeless wisdom sessions.",
              },
              {
                title: "Sunday Love Feast",
                desc: "Delicious prasadam and soulful association every Sunday.",
              },
              {
                title: "Kirtan & Bhajans",
                desc: "Experience divine energy through congregational chanting.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f3d4a5] rounded-xl shadow-lg p-6 hover:bg-[#e6bf7e] transition duration-300"
              >
                <h4 className="text-xl font-semibold text-[#5c3d1f] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kirtan Image Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src={kirtanImage}
          alt="Kirtan"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Chant and Be Happy</h2>
          <p className="mt-3 text-lg max-w-2xl">
            Join our kirtan sessions and experience the pure joy of Krishna
            consciousness.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-[#d1a664] text-white">
        <h3 className="text-3xl font-bold">Visit ISKCON Bhusawal</h3>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Be part of our growing family of devotees. Participate in kirtans,
          seva, and festivals celebrating Lord Krishna.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-white text-[#d1a664] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Embedded YouTube Video */}
      <YouTubePlayer videoId={VIDEO_ID} />
    </>
  );
};

export default IskconBhusawal;
