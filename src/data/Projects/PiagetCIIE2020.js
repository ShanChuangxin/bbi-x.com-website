import React from "react";

export const PiagetCIIE2020 = {
    slug: 'piaget-ciie2020',
    name: 'PIAGET CIIE2020',
    client: 'Auditoire / Piaget',
    cover: '/resources/projects/PiagetCIIE2020/cover.jpg',
    components: 'Photo booth, Touch screen, Mirror screen',
    type: 'Exhibition',
    location: 'National Exhibition and Convention Center（Shanghai）',
    title: 'Interactive mirror booth',
    summary: 'As a "veteran" brand that has participated in the CIIE for three consecutive years, PWC\'s new theme — sharing the era together, controlling the situation in a proper way, helping government and enterprises to grasp the opportunities of change under the new normal, control the trend of the times, and create a win-win situation future.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/PiagetCIIE2020/main.mp4"} type="video/mp4" />
            </video>

            <h2>Interactive Mirror Booth</h2>
            <p>By interacting with the mirror, you can try on jewelry and watches via AR experience. A selfie photo with AR items is taken for Guest to keep a digital copy of themselves wearing Piaget’s jewelry. Piaget’s "Interactive Mirror" is the only brand under the Richemont Group that has an interactive experience for Guest to be engage with.</p>
            <img src={"/resources/projects/PwcCIIE2020/e-book.gif"} alt={"e-book"} />

        </>
    )
}