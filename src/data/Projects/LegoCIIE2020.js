import React from "react";

export const LegoCIIE2020 = {
    slug: 'lego-ciie2020',
    name: 'Lego New World',
    client: 'Jack Morton / Lego',
    cover: '/resources/projects/LegoCIIE2020/cover.jpg',
    components: 'Lego scanner, Touch screen',
    type: 'Exhibition',
    location: 'National Exhibition and Convention Center（Shanghai）',
    title: 'Lego New World',
    summary: 'On the basis of continuing the unique play experience of the Lego brand, BLACKBOX help to create creative, fun and interactive play experiences around the three core highlights of creativity, innovation and sustainable development.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/LegoCIIE2020/main.mp4"} type="video/mp4" />
            </video>

            <h2>Lego Questionnaire</h2>
            <p>At the entrance of the booth, you can visit the questionnaire page by scanning the code, complete simple questions, learn about the ingenuity of Lego bricks, and visit the official website to learn about the latest LEGO news.</p>
            <img src={"/resources/projects/LegoCIIE2020/questionnaire.gif"} alt={"questionnaire"} />

            <h2>Lego Book</h2>
            <p>With its 88-year history of development, LEGO’s “past” is worth the time exploring and understanding the story behind it. Based on this concept, Lego has set up a corner to place the “Lego Book”. Guest can swipe the drop-down arrow with their fingertips to drop the building blocks to start their learning journey. Understand LEGO history, view photos and short clips, interact with the content are part of the “Lego Book” experience.</p>
            <img src={"/resources/projects/LegoCIIE2020/e-book.gif"} alt={"e-book"} />
            <img src={"/resources/projects/LegoCIIE2020/e-book details.gif"} alt={"e-book details"} />

            <h2>Lego Scanning Table</h2>
            <p>At the LEGO interactive scanner machine, Guest can freely piece up different LEGO bricks to create their own artwork and scan it on the machine before their artworks comes to life on the big screen display.</p>
                <img src={"/resources/projects/LegoCIIE2020/scanner.gif"} alt={"scanner"} />
                <img style={{marginTop:-24}} src={"/resources/projects/LegoCIIE2020/large screen.gif"} alt={"large screen gif"} />
        </>
    )
}