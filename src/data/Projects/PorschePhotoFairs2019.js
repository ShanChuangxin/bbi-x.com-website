import React from "react";

export const PorschePhotoFairs2019 = {
    slug: 'porsche-photofairs',
    name: 'PHOTOFAIRS Dream·Vision',
    client: 'Jack Morton / Porsche',
    cover: '/resources/projects/PorschePhotoFairs/cover.jpg',
    components: 'Projection, AR, RFID',
    type: 'Conference',
    location: 'Shanghai, China',
    title: 'Combining Technology and Art',
    summary: 'Porsche held it\'s annual PHOTOFAIRS event at the Shanghai Exhibition Center. In addition to showcasing works from world-renowned photographers, they also wanted to involve guests in the development process',
    body: (
        <>
            <p>As one of the top photography fairs in the Asia Pacific region, the sixth edition of PHOTOFAIRS Shanghai will return to the Shanghai Exhibition Center from September 20 to 22. As a presenting partner, Porsche’s thematic exhibition “Dream • Vision” officially kicked off on September 19. Through a photographic lens, Porsche presents “Dream • Vision” with four statements that have made the brand what it is today: Icon, Design, Passion and Vision. After joining hands with PHOTOFAIRS Shanghai at the beginning of 2017, Porsche has showcased a series of fascinating image journeys at the Fair for three consecutive years.</p>

            <img src={"/resources/projects/PorschePhotoFairs/dark-room-entrance.jpg"} alt={"photofairs dark room entrance"} />

            <h2>Digital Darkroom</h2>

            <img src={"/resources/projects/PorschePhotoFairs/dark-room.jpg"} alt={"photofairs dark room"} />

            <img src={"/resources/projects/PorschePhotoFairs/darkroom-empty.jpg"} alt={"photofairs empty dark room"} />

            <img src={"/resources/projects/PorschePhotoFairs/darkroom-photo.jpg"} alt={"photofairs dark room interactive"} />

            <p>We invited guests to experience the photo development sensation which fewer and fewer people are able to experience in real life, by placing large boards meant to represent photo paper into trays filled with "developer solution". In actuality we mimicked the sensation of liquid with visual projections and audio queues which activated with some soft splashing as the boards were placed into the trays.</p>

            <p>Soon after, guests would see artwork develop itself onto the board just as they would in a real dark room</p>

            <h2>Bringing 2D Photos to Life with AR</h2>

            <img src={"/resources/projects/PorschePhotoFairs/ar-illustrations.jpg"} alt={"photofairs ar illustration"} />

            <p>Futuristic illustrations of Porsche models were brought to the next level with an AR app developed in iOS that would detect the image and extrapolate individual components into 3D space</p>


            <h2>Guided Tours of the Exhibition Hall</h2>

            <img src={"/resources/projects/PorschePhotoFairs/registration-area.jpg"} alt={"photofairs registration area"} />

            <img src={"/resources/projects/PorschePhotoFairs/car.jpg"} alt={"photofairs car bisected"} />

            <p>Guests were able to check-in via a specially designed WeChat app. The Shanghai Exhibition Center is a massive complex, where one can easily get lost and lose context of what they are looking at. We employed Beacon technology to identify individual locations indoors and served up relevant audio content.</p>
        </>
    )
}