import React from "react";
import emiLogo from "../../media/images/awards/emi.svg";

export const AudiAIME = {
    slug: 'audi-ai:me',
    name: 'Audi AI:ME',
    client: 'Freeman XP / Audi',
    cover: '/resources/projects/AudiAIME/cover.jpg',
    components: 'Sensors, Touch, Projection',
    type: 'Press Event',
    location: 'Shanghai, China',
    title: 'Experiencing digital freedom',
    summary: 'Audi unveiled it\'s AI:ME concept car, presenting it\'s sleak design and optimistic outlook. But they wanted to pull bystanders further into the experience, creating a room full of digital walls that you could personalize',
    body: (
        <>
            <h2>Using scent branding for lasting impressions</h2>

            <img src={"/resources/projects/AudiAIME/aurora.jpg"} alt={"audi aurora interactive"} />

            <p>While visitors were already being whisked away visually, we engaged another sense to complete the immersiveness of the installation. Depending on the environment being displayed, a scent dispenser would spray representative frangrance into the air</p>

            <h2>Leaving a digital trail</h2>

            <img src={"/resources/projects/AudiAIME/podium.jpg"} alt={"audi podium interactive"} />

            <p>Guests were encouraged to leave their mark by signing their signature into a touch screen. The signature would be transported onto the walls, making for a great photo opportunity</p>
        </>
    ),
    awards: [
        {
            image: emiLogo,
            name: <>Best Media Event<br />(Bronze)</>,
            organization: 'Event Marketing Awards'
        }
    ]
}