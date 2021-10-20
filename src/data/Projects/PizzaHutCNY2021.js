import React from "react";

export const PizzaHutCNY2021 = {
    slug: 'pizzahut-cny2021',
    name: 'New Year\'s dinner from Immersive 5D Dining in heritage culture Art',
    client: 'Blacksmith / Pizza Hut',
    cover: '/resources/projects/PizzaHutCNY2021/cover.jpg',
    components: 'Sensors, Radar, Projection, Immersion',
    type: 'Conference',
    location: 'Beijing, Shanghai, Nanjing, Guangzhou, Chengdu',
    title: '5D Immersive Dining in Fine Art',
    summary: 'Pizza Hut launches the “intangible cultural heritage” theme with a 5D immersive experience, invites guest to come together to celebrate and enjoy a unique Chinese New Year\'s Eve meal.',
    body: (
        <>
            <video controls playsInline={true}>
                <source src={"/resources/projects/PizzaHutCNY2021/main.mp4"} type="video/mp4" />
            </video>

            <h2>Lucky Punch Box</h2>
            <p>Striking the "Punch Box" will play Zhao Liying's sweet "Get rich" audio message, just like fortune blessings for the coming year.</p>
            <img src={"/resources/projects/PizzaHutCNY2021/punchbox.gif"} alt={"punchbox"} />

            <h2>Touch Wall</h2>
            <p>Use radar sensors technology to create an interactive wall, touching the blinking arrows allows you view the animation content of Qinhuai Lantern Club, Huaxian shadow, Southern Guangdong awakening lion and Sichuan dramatic face, in the form of light and shadow dance, displaying the unique charms of China's "intangible cultural heritage".</p>
            <img src={"/resources/projects/PizzaHutCNY2021/lanternclub.gif"} alt={"Qinhuai lantern club"} />
            <img src={"/resources/projects/PizzaHutCNY2021/awakeninglion.gif"} alt={"Southern Guangdong awakening lion"} />
            <img src={"/resources/projects/PizzaHutCNY2021/dramatic face.gif"} alt={"Sichuan dramatic face on wall"} />
            <img src={"/resources/projects/PizzaHutCNY2021/touch wall collections.gif"} alt={"touch wall collection"} />

            <h2>Cultural Heritage Wall</h2>
            <p>Entering the immersive projection room, the surrounding projects the 360 “intangible cultural heritage” content – The bustling new year's market that showcase all eleven kinds of cultural heritage, allowing guest to experience a different New Year atmosphere.</p>
            <img src={"/resources/projects/PizzaHutCNY2021/cultural heritage wall.gif"} alt={"cultural heritage wall"} />

            <h2>Interactive Table</h2>
            <p>Dining table animation displays different Light and shadow interactive contents - lotus ripples, dragon boat shuttles, face changing characters.Each dish has a unique animation content. According to the respective dishes, there will also be hidden "red envelope".</p>
            <img src={"/resources/projects/PizzaHutCNY2021/dragon boat.gif"} alt={"dragon boat shuttles"} />
            <img src={"/resources/projects/PizzaHutCNY2021/Huaxian shadow.gif"} alt={"Huaxian shadow"} />
            <img src={"/resources/projects/PizzaHutCNY2021/dish face.gif"} alt={"Sichuan dramatic face on dish"} />
            <img src={"/resources/projects/PizzaHutCNY2021/table show collections.gif"} alt={"table show collections"} />
        </>
    )
}