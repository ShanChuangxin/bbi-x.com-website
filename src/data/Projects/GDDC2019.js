import React from "react"
import emiLogo from "../../media/images/awards/emi.svg"

export const GDDC2019 = {
    slug: 'gdd-2019',
    fade: false, // Determines whether dark fade overlays the cover
    name: 'Google Developer Days 2019',
    client: 'Freeman / Google',
    cover: '/resources/projects/GDD2019/cover.jpg',
    components: 'RFID Tracking, AR Technology, Arduino, Mechanical',
    type: 'Conference',
    location: 'Shanghai, China',
    title: 'AR, Arduino & More',
    summary: 'Google held it\'s 3rd annual conference for developers in China. They needed creative solutions to both showcase the new software development kits available to developers, and measure their interest in those technologies.',
    body: (
        <>
            <h2>Checking in to stay connected</h2>

            <p>Data collection is a vital product of any large-scale event, and it was of utmost importance for a big data company like Google. We helped speedily process a flood of conference guests in a short morning time period (just fast enough to get them all seated for the keynote event).</p>

            <video controls playsInline={true}>
                <source src={"/resources/projects/GDD2019/registration.mp4"} type="video/mp4" />
            </video>

            <p>Our TrackBox system integrated seamlessly into their registered user database to process each visitor within an average of 10 seconds of approaching the check-in counter. Once paired with a RFID-enabled badge, visitors were tracked at every developer booth they registered interest with. The solution aimed to be as unobtrusive as possible, allowing as much data to be collected as possible while letting participants focus on Google's tech offerings.</p>

            <h2>Augmenting Reality with Shareable Videos</h2>

            <video controls>
                <source src={"/resources/projects/GDD2019/ar-photo-booth.mp4"} type="video/mp4" />
            </video>

            <p>AR technology is still in it's infancy and receives significant developer updates each year. Google wanted a showstopper just past the gates that could demonstrate in a fun and engaging way just how far their ARCore technology has come.</p>

            <p>We paired ARCore with a mechanical track and adorably animated "droids" to make sure that all guests had a chance to leave with a digital keepsake. After taking a 5-second video, guests were instructed to scan a QR code leading them to a WeChat H5 page where they could see themselves joined by the droids of their choice.</p>

            <video controls>
                <source src={"/resources/projects/GDD2019/ar-video.mp4"} type="video/mp4" />
            </video>

            <p>Blackbox not only handled all software development, app development and mechanical engineering for the project, but also advised in the construction of the photo booth to ensure critical AR limitations were taken into account and addressed.</p>

            <h2>A Miniature World to Show How Google Assistant Connects Us</h2>

            <video controls>
                <source src={"/resources/projects/GDD2019/train-demo.mp4"} type="video/mp4" />
            </video>

            <p>Google launched a new version of their Google Assistant SDK which allowed more commands to be issued and processed locally on devices or more immediately on Google's own servers. While shaving off half a second doesn't sound that impressive, for smart home operations modest improvements in the time to response can make a very meaningful impact.</p>

            <p>We helped create a diorama of sorts that engaged developers and accentuated the difference between the two common connection routes. The result was a captive audience participating in dialogue with the product owners.</p>
        </>
    ),
    awards: [
        {
            image: emiLogo,
            name: <>Best Digital Experience<br />(Gold)</>,
            organization: 'Event Marketing Awards'
        },
        {
            image: emiLogo,
            name: <>Best Corporate Event<br />(Bronze)</>,
            organization: 'Event Marketing Awards'
        },
        {
            image: emiLogo,
            name: <>Best Brand Experience - B2B<br />(Bronze)</>,
            organization: 'Event Marketing Awards'
        }
    ]
}