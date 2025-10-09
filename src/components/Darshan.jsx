import React from 'react';
import img1 from '../assets/darshan/1.jpeg';
import img2 from '../assets/darshan/2.jpeg';
import img3 from '../assets/darshan/3.jpeg';
import img4 from '../assets/darshan/4.jpeg';
import img5 from '../assets/darshan/5.jpeg';
import img6 from '../assets/darshan/6.jpeg';
import img7 from '../assets/darshan/7.jpeg';
import img8 from '../assets/darshan/8.jpeg';
import img9 from '../assets/darshan/9.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Darshan() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Darshan Gallery
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Darshan;
