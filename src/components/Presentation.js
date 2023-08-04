import React from "react";

const Presentation = () => {
    return(
        <section
            className="bg-left-top bg-landscape bg-cover max-w-full">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Cabana Ardeleanu</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Aici, la Cabana Ardeleanu, combinăm ospitalitatea cu experiențe unice în natură.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="https://www.booking.com/hotel/ro/camere-in-casa-de-lemn-proaspat-renovata.ro.html?aid=304142&label=gen173bo-1FCAsowAFCKGNhbWVyZS1pbi1jYXNhLWRlLWxlbW4tcHJvYXNwYXQtcmVub3ZhdGFIIFgDaCyIAQKYASC4ARjIAQ3YAQHoAQH4AQOIAgGYAgKoAgS4At6P6KMGwAIB0gIkNjEyMmE3NzUtZjZjMy00MDFjLWI5YmMtMzE5NzAyYjIyMGUw2AIF4AIB&sid=e1e2352c1d585345b45a37e918044ba8&all_sr_blocks=874172101_356265923_2_0_0;checkin=2023-08-16;checkout=2023-08-17;dest_id=-1152540;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=874172101_356265923_2_0_0;hpos=1;matching_block_id=874172101_356265923_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=874172101_356265923_2_0_0__21835;srepoch=1691136162;srpvid=c3d5388fac8e0047;type=total;ucfs=1&#hotelTmpl"
                       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-highlight-blue-dark hover:bg-highlight-blue-light focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Rezervă acum
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#overview"
                       className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Citește mai mult
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Presentation;