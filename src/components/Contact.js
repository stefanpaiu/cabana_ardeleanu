import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

function Contact (){
    return(
        <section className="bg-white dark:bg-gray-900 rounded-md" id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-600 dark:text-white">Contactați-ne</h2>
                <p className="mb-8 px-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Ne puteți contact la telefon sau pe mail pentru informații legate de Safari, dar și pentru orice alte nedumeriri.</p>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:text-xl ">
                    <a href="tel:+40744266714" className="col-span-1 pb-4 md:pb-0">
                        <p className="text-paragraph font-semibold text-center"><FontAwesomeIcon icon={faPhone} size="xl" className="text-water-blue-dark mr-8" />+40744266714</p>
                    </a>
                    <a href="mailto:robert-mihai.amarinei@unige.ch" className="col-span-1 pt-4 md:pt-0">
                        <p className="text-paragraph font-semibold text-center"><FontAwesomeIcon icon={faEnvelope} size="xl" className="text-water-blue-dark mr-8" />robert-mihai.amarinei@unige.ch</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;