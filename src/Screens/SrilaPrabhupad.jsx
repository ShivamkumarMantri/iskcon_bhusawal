import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.jpg";

const SrilaPrabhupada = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://hkmchennai.org/wp-content/uploads/2021/11/srila-prabhupada.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Srila Prabhupada
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-3xl mx-auto italic">
            “If you simply chant Hare Krishna, your life will be sublime.”
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#d1a664]">
          Founder-Acharya of ISKCON
        </h2>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896–1977)
          dedicated his life to fulfilling the instruction of his spiritual
          master — to spread the teachings of Lord Krishna across the world. In
          his seventies, with no financial support, he traveled alone to America
          and founded the International Society for Krishna Consciousness
          (ISKCON). Today, ISKCON is a global movement that has touched millions
          of hearts.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          His Divine Journey
        </h2>

        <div className="relative border-l-4 border-[#d1a664] pl-8 space-y-10">
          {[
            {
              year: "1896",
              emoji: "🎂",
              title: "Birth",
              desc: "Born as Abhay Charan De in Kolkata, India.",
            },
            {
              year: "1922",
              emoji: "🙏",
              title: "Meeting His Guru",
              desc: "Met Srila Bhaktisiddhanta Saraswati Thakur, who instructed him to spread Krishna Consciousness in the West.",
            },
            {
              year: "1944",
              emoji: "📰",
              title: "Back to Godhead Magazine",
              desc: "Founded and published the magazine to share Krishna’s message — it continues to inspire readers worldwide.",
            },
            {
              year: "1965",
              emoji: "🚢",
              title: "Journey to America",
              desc: "Embarked alone on the cargo ship Jaladuta to New York at age 69, enduring hardships with unshakable faith in Krishna.",
            },
            {
              year: "1966",
              emoji: "🏛️",
              title: "Founded ISKCON",
              desc: "Established the International Society for Krishna Consciousness in New York City.",
            },
            {
              year: "1972",
              emoji: "📚",
              title: "Bhagavad-gita As It Is",
              desc: "Published his definitive translation and commentary, now the most widely read Gita worldwide.",
            },
            {
              year: "1977",
              emoji: "🌿",
              title: "Final Pastimes",
              desc: "Departed in Vrindavan, leaving behind over 70 books, 108 temples, and a global spiritual movement.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg text-xl">
                {item.emoji}
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#d1a664]">
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-[#f8e2b3] to-[#e7c67d] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 italic max-w-3xl mx-auto">
          “Chant Hare Krishna and be happy.”
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Srila Prabhupada’s message remains timeless — a call to connect with
          the divine through devotion, service, and love.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Memorable Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[s1, s2, s3].map((src, i) => (
            <img
              key={i}
              src={src}
              className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
              alt={`Srila Prabhupada ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#d1a664] py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Follow Srila Prabhupada’s Teachings
        </h2>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
          Dive deeper into his transcendental wisdom through his books,
          lectures, and teachings — guiding millions on the path of Bhakti Yoga.
        </p>
        <a
          href="https://vedabase.io/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#d1a664] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Explore His Books
        </a>
      </section>
    </div>
  );
};

export default SrilaPrabhupada;
