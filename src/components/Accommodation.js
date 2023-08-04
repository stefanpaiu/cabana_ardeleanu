import React from "react";

import lodgePexels from "../images/lodge/lodge-pexels.jpg"
import lodgeV from "../images/lodge/lodge-vertical.jpg"
import lac_bicaz from "../images/nature/lac_bicaz.jpg"

const Accommodation = () => {
    return(
        <div className="lg:max-w-full lg:px-32 lg:px-32 md:mx-auto md:px-16 py-24 bg-stone-100" id="accommodation">

            <p className="text-center text-4xl font-bold tracking-tight leading-none text-gray-600 md:text-3xl lg:text-4xl">Cazare</p>

            <div className="grid lg:grid-cols-5 md:grid-cols-1 p-12 gap-16">

                <div
                   className="lg:col-span-3 flex flex-col bg-white border border-gray-200 rounded-md shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover xl:w-48 rounded-t-lg h-96 md:h-auto md:w-32 md:rounded-none md:rounded-l-lg"
                             src={lodgeV} alt="" />
                    <div className="flex flex-col w-full justify-center p-4 leading-normal">
                        <div className="relative">
                            <div className="absolute inset-0 bg-highlight z-0 rounded-r-lg rounded-l-sm h-2.5 w-44 top-5 left-4 opacity-75"></div>
                            <h5 className="relative inline-block px-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Cabană de lemn în centrul Bicazului Ardelean
                            </h5>
                        </div>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400"> Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

                <div
                    className="lg:col-span-2  bg-white border border-gray-200 rounded-md shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="rounded-t-lg w-full h-auto" src={lac_bicaz} alt=""/>

                    <div className="p-5">
                        <div className="relative">
                            <div className="absolute inset-0 bg-highlight z-0 rounded-r-lg rounded-l-sm h-2.5 w-32 top-5 left-4 opacity-75"></div>
                            <h5 className="relative inline-block px-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                La doi pași de peisaje de vis
                            </h5>
                        </div>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
                <div
                    className="w-auto flex flex-col my-4 bg-white border border-gray-200 rounded-md shadow mx-12 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className="relative">
                            <div className="absolute inset-0 bg-highlight z-0 rounded-r-lg rounded-l-sm h-2.5 w-48 md:w-72 sm:w-48 top-5 left-4 opacity-75"></div>
                            <h5 className="relative inline-block px-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Facilități pentru un confort deosebit
                            </h5>
                        </div>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400"> Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400"> Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p className="px-6 mb-3 font-medium text-paragraph text-xl dark:text-gray-400"> Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    </div>
                    <img className="object-cover xl:w-48 rounded-r-lg h-96 md:h-auto md:w-32"
                         src={lodgePexels} alt="" />
                </div>
        </div>
    );
}

export default Accommodation;