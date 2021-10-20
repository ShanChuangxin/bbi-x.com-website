import React from "react";

export const MonetGardenAfternoonTea = {
    slug: 'monet-afternoon-tea',
    name: 'Monet Garden Afternoon Tea',
    client: 'Blacksmith / Pizza Hut',
    cover: '/resources/projects/MonetGardenAfternoonTea/cover.jpg',
    components: 'Sensors, Projection, Immersion',
    type: 'Conference',
    location: 'Hangzhou, China',
    title: 'Immersive Dining in Fine Art',
    summary: 'Partnering with Museum of Fine Arts Boston, Pizza Hut created a unique immersive experience wrapping diners in a moving impressionist painting',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/MonetGardenAfternoonTea/showreel.mp4"} type="video/mp4" />
            </video>

            <img src={"/resources/projects/MonetGardenAfternoonTea/table-end.jpg"} alt={"projection table end"} />

            <img src={"/resources/projects/MonetGardenAfternoonTea/table-angle.jpg"} alt={"projection table angle"} />
        </>
    )
}