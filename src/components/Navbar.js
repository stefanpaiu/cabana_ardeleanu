import React from "react";

const sections = [
    {
        title: 'Cazare',
        link: '#accommodation'
    },
    {
        title: 'Safari cu Urși',
        link: '#bear-safari'
    },
    {
        title: 'Despre Noi',
        link: '#about'
    },
]

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/*! Temporary solution ! -- The extra div.*/}
                <div className="flex justify-start"></div>
                <div className="flex justify-center hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
                        {sections.map(section => (
                        <li>
                            <a href={section.link}
                               className="block py-2 pl-3 pr-4 text-water-blue-dark rounded hover:bg-gray-100 hover:text-water-blue-medium-dark md:hover:bg-transparent md:hover:water-blue-medium md:p-0 md:dark:hover:text-water-blue-medium dark:water-blue-dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                               aria-current="page">{section.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex md:order-3">
                <a href="#contact"
                        className="text-white bg-highlight-blue-dark hover:bg-highlight-blue-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-highlight-blue-light dark:hover:bg-highlight-blue-dark dark:focus:ring-blue-800">Contact
                </a>
                </div>
                <div className="flex md:order-4">

                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex md:items-center sm:items-start p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;