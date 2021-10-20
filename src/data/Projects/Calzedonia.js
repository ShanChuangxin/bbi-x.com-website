import React from "react";

export const Calzedonia = {
    slug: 'calzedonia',
    name: 'Calzedonia Leg’s Shine',
    client: 'Auditoire / Calzedonia',
    cover: '/resources/projects/calzedonia/cover.jpg',
    components: 'Gif booth, Touch screen, Video booth',
    type: 'Exhibition',
    location: 'Cha Mansion (Shanghai)',
    title: 'Leg’s Shine',
    summary: 'The theme event of CALZEDONIA "LEG’S SHINE" was shiningly held at the Cha Mansion in Shanghai, where the CALZEDONIA 2020 autumn and winter series essential pantyhose items were displayed in creative form. BLACKBOX is honored to be part of the event, providing digital solutions - RSVP system, GIF booth, and Video booth interactive.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/calzedonia/main.mp4"} type="video/mp4" />
            </video>

            <h2>RSVP</h2>
            <p>Guests will have to register before the event and display their personalized QR code onsite for event admission. The event hostess will have to scan the guest's QR code via the iPad RSVP system to verify their identity for the check-in process.</p>
            <img src={"/resources/projects/calzedonia/check in.gif"} alt={"check in"} />

            <h2>Gif booth</h2>
            <p>Participating guests will select CALZEDONIA customized props and do three different poses in front of the photo booth installation. The photobooth system will capture 3 photos and convert them into a GIF before generating a QR code for them to scan and save the digital copy and share it with WeChat moments or their friends, CALZEDONIA. Asia Pacific brand spokesperson Yang Mi also experienced our GIF interaction on the night.</p>
            <img src={"/resources/projects/calzedonia/gif booth.gif"} alt={"gif booth"} />
            <img src={"/resources/projects/calzedonia/final gif.gif"} alt={"final gif"} />

            <h2>Video booth</h2>
            <p>To allow guest experience walking on the "silver carpet", our greenscreen video booth crops the guest in real-time and place them into CALZEDONIA silver carpet scene. Guest can download and save their "silver carpet experience" video by scanning the system generated QR code.</p>
            <img src={"/resources/projects/calzedonia/video booth.jpg"} alt={"video booth"} />
            <img src={"/resources/projects/calzedonia/video booth effect.gif"} alt={"video booth gif"} />
            <img src={"/resources/projects/calzedonia/video booth experience.gif"} alt={"video booth experience gif"} />
        </>
    )
}