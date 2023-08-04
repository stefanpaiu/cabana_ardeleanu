import React from "react";

function Footer () {
    return(
        <footer className="bg-stone-100 rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-paragraph sm:text-center dark:text-gray-400">2023 <a href="https://www.booking.com/hotel/ro/camere-in-casa-de-lemn-proaspat-renovata.ro.html?label=gen173bo-1DCAsowAFCKGNhbWVyZS1pbi1jYXNhLWRlLWxlbW4tcHJvYXNwYXQtcmVub3ZhdGFIIFgDaCyIAQKYASC4ARjIAQ3YAQPoAQH4AQOIAgGYAgKoAgS4At6P6KMGwAIB0gIkNjEyMmE3NzUtZjZjMy00MDFjLWI5YmMtMzE5NzAyYjIyMGUw2AIE4AIB&sid=451ca6712053940084ebd872e5218174&aid=304142&ucfs=1&arphpl=1&checkin=2023-08-16&checkout=2023-08-17&dest_id=-1152540&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=34094eb167cc018d&srepoch=1691061093&all_sr_blocks=874172101_356265923_2_0_0&highlighted_blocks=874172101_356265923_2_0_0&matching_block_id=874172101_356265923_2_0_0&sr_pri_blocks=874172101_356265923_2_0_0__21835&from=searchresults#hotelTmpl"
                                                                                          className="hover:text-gray-300">Cabana Ardeleanu</a> | <a>Ștefan Paiu</a>
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-water-blue-dark dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#overview" className="mr-4 hover:text-water-blue-medium-dark md:mr-6 ">Prezentare Generală</a>
                    </li>
                    <li>
                        <a href="#accommodation" className="mr-4 hover:text-water-blue-medium-dark md:mr-6">Cazare</a>
                    </li>
                    <li>
                        <a href="#bear-safari" className="mr-4 hover:text-water-blue-medium-dark md:mr-6">Bear Safari</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-water-blue-medium-dark">Despre Noi</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;