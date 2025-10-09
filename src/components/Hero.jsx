import React from "react";
import img from '../assets/new_temple.jpg'

function Hero() {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <img
        src={img}
        alt="ISKCON Bhusawal"
        className="w-full h-full object-cover"
      />

      {/* Overlay (optional for darkening the image) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold drop-shadow-lg font-serif">
          Welcome to <span className="text-cyan-300">ISKCON Bhusawal</span>
        </h1>

        <p className="text-xl md:text-6xl mt-4 drop-shadow-md font-dancing text-center">
          Sri Sri Radha Murlidhar Mandir
        </p>
      </div>
    </div>
  );
}

export default Hero;
