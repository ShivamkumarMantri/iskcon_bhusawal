"use client";

import React from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  X,
} from "lucide-react";
import img1 from "./assets/1.png";

import { Link } from "react-router-dom";


export function LandinngPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-[#fcebd2]">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#FF69B4] md:text-4xl lg:text-6xl">
              Sri Krishna Janmashtami Celebration 2024
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              We are excited to invite you along with your friends and family to
              this festival of Sri Krishna Janmashtami 2024!
            </p>

            <p className="mt-8 text-lg text-gray-700">
              On Janmashtami one can pray to Krishna kindly requesting Him to
              appear in our heart and always attract our mind towards Him...
            </p>

            <form action="" className="mt-8 flex items-start space-x-2"></form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="w-full h-full object-contain bg-[#fcebd2] lg:h-[700px] xl:aspect-[16/9]"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="px-4 py-10 lg:col-span-5 lg:px-0">
            <h1 className="text-3xl pl-5 font-bold md:text-5xl">
              Sevas offered to the Lord
            </h1>
            <p className="mt-8 pl-5 font-medium">
              There will be various sevas offered to Their Lordships. There will
              also be a unique offering of delicacies to their Lordships. Many
              opportunities are available on this most auspicious day to
              participate in the grand celebration throughout the day.
            </p>

            <p className="mt-8 pl-5 font-medium">
              You can experience spiritual bliss through cultural programs,
              divine darshan, special sevas, melodious kirtans, and delicious
              prasadam.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full p-5">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className="border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Pandal Seva
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Tents for the festivals.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <div className="md:inline-block">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 60,000/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-5">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className="border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Mahaprasad Seva
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Dinner prasadam for devotees.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <div className="md:inline-block">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 50,000/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-5">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className="border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Deities Dress
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Dresses for Radha-Krishna.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <div className="md:inline-block">
                  <Link to="/Donate" className="flex items-center">
                   <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 25,000/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-5">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className="border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Flower Seva
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Decoration for the festival.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <div className="md:inline-block">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 25,000/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Abhishekam of Their Lordships
            </h1>
            <p className="text-lg text-gray-500">
              Your kind donation will help us in Worshipping the Lord
              gorgeously, celebrating Janmashtami, Rama Navami and many other
              festivals, distributing Prasadam freely every day to hundreds of
              visitors, conducting courses for all age groups and through all
              this preserving and spreading awareness about our Ancient Indian
              VEDIC CULTURE.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      Nand Yashoda Abhishek
                    </span>
                   
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 11,000/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                 
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                     Mahashankh Abhishek
                    </span>
                   
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 5,100/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

             


              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                 
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      Shankh Abhishek
                    </span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                  <Link to="/Donate" className="flex items-center">
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate ₹ 2,100/-
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block mb-5 text-sm text-bold text-black sm:text-center dark:text-gray-400">ISKCON Bhusawal</span>


      <span class="block mb-10 text-sm text-gray-500 sm:text-center dark:text-gray-400">SRI SRI RADHA MURLIDHAR MANDIR Near Roop Darshan photo studio, Ram Mandir ward, opposite New LIC Office, Bhusawal, Maharashtra 425201</span>


    </div>
  );
}
