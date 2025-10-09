import React from "react";

const activities = [
  {
    title: "Kirtan & Bhajans",
    description:
      "Experience the joy of devotional music with uplifting kirtans and soul-stirring bhajans.",
    image: "/images/kirtan.jpg",
  },
  {
    title: "Spiritual Discourses",
    description:
      "Engaging talks on Bhagavad Gita, Srimad Bhagavatam, and Vedic wisdom for practical application in daily life.",
    image: "/images/discourse.jpg",
  },
  {
    title: "Sunday Feast",
    description:
      "A weekly gathering filled with kirtan, spiritual discussions, and delicious Krishna prasadam.",
    image: "/images/sunday-feast.jpg",
  },
  {
    title: "Children’s Spiritual Education",
    description:
      "Fun-filled activities and teachings from the scriptures designed to nurture young minds.",
    image: "/images/kids-class.jpg",
  },
  {
    title: "Festivals & Celebrations",
    description:
      "Celebrate festivals like Janmashtami, Gaura Purnima, and Ratha Yatra with grandeur and devotion.",
    image: "/images/festival.jpg",
  },
  {
    title: "Seva & Community Service",
    description:
      "Engage in selfless service through food distribution, temple maintenance, and outreach programs.",
    image: "/images/seva.jpg",
  },
  {
    title: "Youth Empowerment Programs",
    description:
      "Interactive sessions and workshops aimed at guiding young individuals towards a spiritually enriched life.",
    image: "/images/youth.jpg",
  },
  {
    title: "Cultural Festivals",
    description:
      "Grand celebrations of festivals with music, dance, dramas, and elaborate rituals showcasing Vedic culture.",
    image: "/images/culture.jpg",
  },
  {
    title: "Community Outreach & Food Distribution",
    description:
      "Initiatives like 'Food for Life' that focus on distributing sanctified vegetarian meals to the underprivileged.",
    image: "/images/food-distribution.jpg",
  },
  {
    title: "Temple Tours & Educational Seminars",
    description:
      "Guided tours and educational sessions explaining temple rituals, deities, and Vedic philosophy.",
    image: "/images/tours.jpg",
  },
  {
    title: "Yoga & Meditation Sessions",
    description:
      "Regular yoga and meditation classes to help individuals achieve physical well-being and mental tranquility.",
    image: "/images/yoga.jpg",
  },
  {
    title: "Book Distribution & Literature Study Groups",
    description:
      "Dissemination of spiritual literature with study groups exploring Vedic scriptures.",
    image: "/images/books.jpg",
  },
];

const programs = [
  {
    day: "Tuesday",
    title: "Bhagavad Gita Class",
    description:
      "A deep discussion on Bhagavad Gita’s teachings, followed by Q&A, kirtan, and mahaprasad.",
    time: "7:00 PM - 9:30 PM",
    image: "/images/gaur.jpg",
  },
  {
    day: "Friday",
    title: "Youth Boys Meetup",
    description:
      "A special interactive session for students and young professionals focused on spirituality and self-growth.",
    time: "7:30 PM - 9:00 PM",
    image: "/images/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Bhagavatam Class & Sunday Feast",
    description:
      "An insightful discourse on Srimad Bhagavatam, followed by kirtan and delicious prasadam.",
    time: "8:00 AM - 10:00 AM",
    image: "/images/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Gopal Fun School",
    description:
      "Interactive spiritual education for children through engaging stories, songs, and fun activities.",
    time: "10:00 AM - 11:00 AM",
    image: "/images/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Chetna Program",
    description:
      "A spiritual session designed exclusively for girls, focusing on self-improvement and devotion.",
    time: "5:00 PM - 6:30 PM",
    image: "/images/gaur.jpg",
  },
];

const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6">
        <h1 className="text-4xl font-bold text-center">ISKCON Pune</h1>
        <p className="text-center text-lg mt-2">Spiritual Activities & Programs</p>
      </header>

      <main className="py-12 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Activities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Weekly Programs</h2>
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {program.day} - {program.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{program.description}</p>
                  <p className="text-gray-700 font-semibold mt-3">Time: {program.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <p className="text-center text-lg">Visit us at ISKCON Pune</p>
        <p className="text-center text-sm">All rights reserved © 2025</p>
      </footer>
    </div>
  );
};

export default App;
