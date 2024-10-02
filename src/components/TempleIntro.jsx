import React from 'react';
import img2 from '../assets/mandir.jpg'; // Update this path to your local logo image

function TempleIntro() {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-4xl lg:mx-auto">
                        Vrindavan in Bhusawal
                    </h2>
                    <p className="text-base font-normal text-gray-500 lg:max-w-3xl lg:mx-auto mb-8">
                        The Sri Sri Radha Murlidhar Mandir, situated in Bhusawal, holds a special significance for the devotees of the International Society for Krishna Consciousness.
                    </p>
                    <p className="text-base font-normal text-gray-500 lg:max-w-3xl lg:mx-auto mb-8">
                        We conduct a variety of courses, seminars, and workshops. In fact, there’s something for everyone – the kids, the youth, the families. We also invite you to dine at our international restaurant, celebrate your occasion at the temple, or join us for any of our tours. Together, let’s enhance the spiritual dimension of our lives!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                    <div className="relative w-full h-auto md:col-span-2">
                        <div className="bg-gray-800 rounded-2xl flex justify-between flex-row flex-wrap">
                            <div className="p-5 xl:p-8 w-full md:w-1/2">
                                <div className="block">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                                    New Temple Construction!
                                </h3>
                                <p className="text-x font-normal text-gray-300 w-full mb-8 xl:w-64">New temple dedicated to Sri Sri Radha Murlidhar is being constructed in Bhusawal.</p>
                                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                    View More
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="relative hidden h-auto md:w-1/2 md:block">
                                <img src={img2} alt="Header tailwind Section" className="h-full ml-auto object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-auto">
                        <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                            <div className="block">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </div>
                            <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Improved technology yields greater value</h3>
                            <p className="text-xs font-normal text-white mb-8">We’ve eliminated old analog processes with state-of-the-art tech.</p>
                            <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                View More
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full h-auto">
                        <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                            <div className="block">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00254 21.2447 2.5C22.8438 2.99746 23.8687 4.22996 23.8687 5.84687C23.8687 7.46377 22.8438 8.69627 21.2447 8.19371C19.6455 7.69115 18.1313 6.46866 18.1313 4.85383" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </div>
                            <h3 className="py-5 text-white text-lg font-bold xl:text-xl">New initiative, same trusted team</h3>
                            <p className="text-xs font-normal text-white mb-8">Leveraging our years of expertise to launch a brand new program.</p>
                            <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                View More
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TempleIntro;
