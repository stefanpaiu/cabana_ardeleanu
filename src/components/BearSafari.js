import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faCircleExclamation, faArrowTurnDown} from '@fortawesome/free-solid-svg-icons'

const BearSafari = () => {
    return (
        <div className="bg-bear bg-cover bg-no-repeat" id="bear-safari">
            <div className="container mx-auto py-8 px-24">

               <p className="my-8 text-2xl font-bold tracking-tight leading-none text-highlight md:text-3xl lg:text-4xl">
                   <FontAwesomeIcon icon={faCampground} size="2xl" className="text-highlight mr-8" />Bear Safari
                   </p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 my-10">
                        <div className="col-span-1 mx-auto rounded-md p-4 ">
                            <div className="font-medium text-white leading-8 md:text-xl">Pentru a aranja sau discuta despre această experiență unică, vă rugăm să ne contactați cu cât mai în avans posibil.</div>
                            <a href="#contact" className="">
                                <button type="button"
                                        className=" text-white text-xl mt-6 bg-transparent border-2 border-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:bg-highlight-blue-light dark:hover:bg-highlight-blue-dark dark:focus:ring-blue-800">Trimite-ne un mesaj
                                    <FontAwesomeIcon icon={faArrowTurnDown} className="ml-4" />
                                </button>
                            </a>
                        </div>
                        <div className="col-span-1 font-medium text-white lg:text-xl mx-auto rounded-md p-4">
                            <p>Cu ce venim noi:</p>
                            <ul className="list-disc">
                                <div className="mt-4"><FontAwesomeIcon icon={faCircleExclamation} size="xl" className="text-highlight pr-4" />Siguranța dvs. garantată.</div>
                                <div className="my-4"><FontAwesomeIcon icon={faCircleExclamation} size="xl" className="text-highlight pr-4" />Experiență de x de ani.</div>
                                <div ><FontAwesomeIcon icon={faCircleExclamation} size="xl" className="text-highlight pr-4" />Cunoștințe avansate despre fauna locala.</div>
                            </ul>
                        </div>
                    </div>
                </div>


        </div>
    );
}

export default BearSafari;