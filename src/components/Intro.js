import React from "react";
import Carousel from "./Carousel"

import lodge1 from "../images/lodge/lodge1.jpg";
import lodge2 from "../images/lodge/lodge2.jpg";
import lodge3 from "../images/lodge/lodge3.jpg";
import lodge4 from "../images/lodge/lodge4.jpg";
import lodge5 from "../images/lodge/lodge5.jpg";

import nature1 from "../images/nature/natura_1.jpg"
import nature2 from "../images/nature/natura_2.jpg"
import nature3 from "../images/nature/natura_3.jpg"
import nature4 from "../images/nature/natura_4.jpg"
import nature5 from "../images/nature/natura_5.jpg"

import soon from "../images/soon.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faBed, faTree } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
    const lodgeImages = [lodge1, lodge2, lodge3, lodge4, lodge5]
    const natureImages = [nature1, nature2, nature3, nature4, nature5]
    const safariImages = [soon]
    return (
        <div className="container mx-auto px-4 py-8 mb-8" id="overview">
            <div className="text-center lg:mx-12">
                <p className="py-12 text-4xl font-bold tracking-tight leading-none text-gray-600">Prezentare Generală</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12 p-12">
                    <div>
                        <h3 className= "font-black mb-8 text-lg text-gray-600 lg:text-2xl">Cazare</h3>
                        <FontAwesomeIcon icon={faBed} size="2xl" className="text-highlight" />
                        <p className="my-6 font-normal text-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Carousel images = {lodgeImages} className="flex justify-center items-center"/>
                    </div>
                    <div>
                        <h3 className= "font-black mb-8 text-lg text-gray-600 lg:text-2xl">Natură</h3>
                        <FontAwesomeIcon icon={faTree} size="2xl" className="text-highlight"  />
                        <p className="my-6 font-normal text-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Carousel images = {natureImages} className="flex justify-center items-center"/>
                    </div>
                    <div>
                        <h3 className= "font-black mb-8 text-lg text-gray-600 lg:text-2xl">Bear Safari</h3>
                        <FontAwesomeIcon icon={faCampground} size="2xl" className="text-highlight" />
                        <p className="my-6 font-normal text-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Carousel images = {safariImages} className="flex justify-center items-center"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;