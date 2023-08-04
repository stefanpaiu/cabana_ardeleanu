import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Carousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? images.length - 1 : newIndex;
        });
    };
    return (
        <div id="controls-carousel" className="relative max-w-auto" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-md md:h-72">
                {images.map((image, index) => (
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            key={index}
                            src={image}
                            className={`absolute rounded-md block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            alt={`Imagine ${index + 1}`}
                        />
                    </div>
                ))}
            <button type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevImage}
                    data-carousel-prev>
                <span>
                    <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="text-water-blue-medium hover:text-water-blue-light" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextImage}
                    data-carousel-next>
                <span>
                    <FontAwesomeIcon icon={faChevronRight} size="2xl" className="text-water-blue-medium hover:text-water-blue-light" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
         </div>
        </div>
    );
};

export default Carousel;