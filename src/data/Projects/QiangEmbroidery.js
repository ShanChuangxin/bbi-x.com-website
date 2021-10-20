import React from "react";
export const QiangEmbroidery = {
    slug: 'qiang-embroidery',
    name: 'Qiang embroidery\'s immersion dining room',
    client: 'Blacksmith / Pizza Hut',
    cover: '/resources/projects/QiangEmbroidery/cover.jpg',
    components: 'Sensors, Radar, Projection, Immersion',
    type: 'Conference',
    location: 'Shanghai, Hangzhou, Xi\'an, Chengdu',
    title: 'Qiang Embroidery Immersive Dining',
    summary: 'PizzaHut is associated with Qiang embroidery\'s national intangible cultural heritage and cooperated with Yang Huazhen, who is the inheritor of Qiang embroidery.  PizzaHut\'s "Peony Garden" immersive interactive restaurant is inspired by Chinese national characteristics.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/QiangEmbroidery/main.mp4"} type="video/mp4" />
            </video>

            <h2>Interactive Table</h2>
            <p>When a dish is placed on the table, the surrounding butterflies and flowers contained within the dish are unleashed, unfolding onto the table and into the surrounding space. The animations unleashed from each dish connect in the external space.</p>
            <img src={"/resources/projects/QiangEmbroidery/table effects.gif"} alt={"table effects"} />
            <img src={"/resources/projects/QiangEmbroidery/flower dish.gif"} alt={"flower dish"} />
            <img src={"/resources/projects/QiangEmbroidery/butterflies dish.gif"} alt={"butterflies dish"} />

            <h2>Surprise Effect</h2>
            <p>We also made a surprise effect. When the steak plate/pizza plate placed at the specified position, the butterfly will fly out from the plate toward the main wall, and the poetry of Dongpo will display on the wall.</p>
            <img src={"/resources/projects/QiangEmbroidery/trigger bonus scene.gif"} alt={"trigger bonus scene"} />
            <img src={"/resources/projects/QiangEmbroidery/bonus scene.gif"} alt={"bonus scene"} />

            <h2>Interactive Wall</h2>
            <p>In this dining room, we set up two interactive digital walls. When customers touch the wall, the butterflies and flowers will show and release from the fingers. The interactive wall will react to the actions of visitors, and combine to create an incredible world.</p>
            <img src={"/resources/projects/QiangEmbroidery/interactive wall.gif"} alt={"interactive wall"} />

        </>
    )
}
