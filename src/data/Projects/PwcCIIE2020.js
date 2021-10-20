import React from "react";

export const PwcCIIE2020 = {
    slug: 'pwc-ciie2020',
    name: 'PWC CIIE2020',
    client: 'Avant garde / PWC',
    cover: '/resources/projects/PwcCIIE2020/cover.jpg',
    components: 'Photo booth, Touch screen',
    type: 'Exhibition',
    location: 'National Exhibition and Convention Center（Shanghai）',
    title: 'Haring the era together, controlling the situation in a proper way',
    summary: 'As a "veteran" brand that has participated in the CIIE for three consecutive years, PWC\'s new theme — sharing the era together, controlling the situation in a proper way, helping government and enterprises to grasp the opportunities of change under the new normal, control the trend of the times, and create a win-win situation future.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/PwcCIIE2020/main.mp4"} type="video/mp4" />
            </video>

            <h2>e-Book</h2>
            <p>Guest can learn about PWC's professional service reviews, industry insights and the latest reports in the form of flipping through newspapers on three interactive screens. Professional insights can be viewed by the swipe of their fingertips.</p>
            <img src={"/resources/projects/PwcCIIE2020/e-book.gif"} alt={"e-book"} />

            <h2>AR Photo Booth</h2>
            <p>Under the guidance of professional photographers, Guest only need to stand in front of the background board to have their photos taken. They will have to scan the code to obtain the digital photo of themselves appearing on the cover of "Tomorrow's Special Issue" AR effect photo.</p>
            <img src={"/resources/projects/PwcCIIE2020/photo booth.gif"} alt={"PhotoBooth"} />
            <img src={"/resources/projects/PwcCIIE2020/save gif.gif"} alt={"save gif"} />

        </>
    )
}