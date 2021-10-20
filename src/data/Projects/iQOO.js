import React from "react";
import emiLogo from "../../media/images/awards/emi.svg";

export const iQOO = {
    slug: 'iqoo-chinajoy',
    name: 'iQOO ChinaJoy Launch',
    client: 'Freeman XP / Vivo',
    cover: '/resources/projects/iQOO/cover.jpg',
    components: 'Mechanical Engineering, 3D modeling, Sensors',
    type: 'Exhibition',
    location: 'Shanghai, China',
    title: 'Leveling Up with Exercise',
    summary: 'Vivo showed off it\'s new iQOO phone during ChinaJoy 2019. They wanted to attract customers to the new phone\'s booth while engaging their physicality in a fun and rewarding interactive game',
    body: (
        <>
            <img src={"/resources/projects/iQOO/bike-and-screen.jpg"} alt={"interactive bike with screen"} />

            <p>An interactive cycle was placed in front of a large screen area. As the cyclist pedalled, we used sensors to detect the intensity of their movement and communicated that intensity to the screen.</p>

            <img src={"/resources/projects/iQOO/man-riding-bike.jpg"} alt={"interactive bike riding man"} />

            <p>Cyclists competed against the clock to reach the end of the virtual track in a limited amount of time. In the end, each cyclist was rewarded with Vitamin Water refreshments from a vending machine programmed to dispense one drink upon completion of the course</p>

            <img src={"/resources/projects/iQOO/booth-and-environment.jpg"} alt={"booth at chinajoy"} />
        </>
    ),
    awards: [
        {
            image: emiLogo,
            name: <>Best Sports Event<br />(Gold)</>,
            organization: 'Event Marketing Awards'
        }
    ]
}