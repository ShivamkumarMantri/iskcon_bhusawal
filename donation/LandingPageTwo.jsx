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
import img1 from "./assets/3.png";

import { Link } from "react-router-dom";


export function LandinngPageTwo() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full bg-[#368aff]">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#fff] md:text-4xl lg:text-6xl">
                            Bhagavad Gita Course - Experience the Divine Knowledge
                        </h1>
                        <p className="mt-8 text-lg text-white">
                            Elevate Your Spirituality With the Bhagavad Gita Course with ISKCON Bhusawal !
                        </p>

                        <p className="mt-8 text-lg text-gray-700">
                            On Janmashtami one can pray to Krishna kindly requesting Him to
                            appear in our heart and always attract our mind towards Him...
                        </p>

                        <form action="" className="mt-8 flex items-start space-x-2"></form>
                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img
                            className="w-full h-full object-contain bg-[#368aff] lg:h-[700px] xl:aspect-[16/9]"
                            src={img1}
                            alt=""
                        />
                    </div>
                </div>
            </div>


            <section className="relative overflow-hidden py-10">
                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
                        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                            Elevate Your Spirituality With the Bhagavad Gita Course !
                        </h1>
                        <p className="text-lg text-gray-500">
                            The Bhagavad Gita is the ultimate 700-verse Hindu spiritual scripture and is a part of the Indian epic Mahabharata. It comprises a conversation between Prince Arjuna and the god Krishna, his charioteer. This dialogue exchange takes place on the battlefield of Kurukshetra, where Arjuna’s moral and philosophical dilemmas before going to the battlefield are addressed. This holy scripture provides the reader with profound spiritual and philosophical teachings.
                        </p>
                    </div>
                  
                </div>
            </section>

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block mb-5 text-sm text-bold text-black sm:text-center dark:text-gray-400">ISKCON Bhusawal</span>


            <span class="block mb-10 text-sm text-gray-500 sm:text-center dark:text-gray-400">SRI SRI RADHA MURLIDHAR MANDIR Near Roop Darshan photo studio, Ram Mandir ward, opposite New LIC Office, Bhusawal, Maharashtra 425201</span>


        </div>
    );
}
