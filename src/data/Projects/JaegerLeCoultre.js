import React from "react";

export const JaegerLeCoultre = {
    slug: 'jaegerlecoultre',
    name: 'THE SOUND MAKER',
    client: 'Auditoire / Jaeger-LECoultre',
    cover: '/resources/projects/JaegerLeCoultre/cover.jpg',
    components: 'Sound acquisition system, Touch screen, Postcard printer',
    type: 'Exhibition',
    location: 'NGuangdong Guildhall·Yuanyang TaiKooli（Chengdu）',
    title: 'THE SOUND MAKER',
    summary: 'The sound maker theme exhibition was officially opened in Guangdong Guildhall, Yuanyang TaiKooli, Chengdu. BLACKBOX participated in the event, designed and produced the "sound maker interactivity room."',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/JaegerLeCoultre/main.mp4"} type="video/mp4" />
            </video>

            <h2>Sound Maker Interactivity Room</h2>
            <p>The sound maker theme exhibition was officially opened in Guangdong Guildhall, Yuanyang TaiKooli, Chengdu. BLACKBOX participated in the event, designed and produced the “sound maker interactivity room”.</p>
            <img src={"/resources/projects/JaegerLeCoultre/field.jpg"} alt={"field"} />

            <p>To allow Guest to convey their wishes and blessings to their love ones, they can do a "whisper" recording before it becomes a digital copy printed on the postcard. Guest can save and listen to the BGM voice recording by scanning the QR code. Stamp designs and various kinds of brushes available for DIY customization.</p>
            <img src={"/resources/projects/JaegerLeCoultre/flow1.gif"} alt={"flow1"} />
            <img src={"/resources/projects/JaegerLeCoultre/flow2.gif"} alt={"flow2"} />
            <img src={"/resources/projects/JaegerLeCoultre/flow3.gif"} alt={"flow3"} />
            <img src={"/resources/projects/JaegerLeCoultre/flow4.gif"} alt={"flow4"} />

        </>
    )
}