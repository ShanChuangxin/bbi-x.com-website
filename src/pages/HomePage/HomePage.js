import React, {Component} from "react"
import {Link} from "react-router-dom"

import WorkTile from "../../components/WorkTile/WorkTile";
import HomeBox from "../../components/HomeBox/HomeBox"; // 默认暴露
import {featured} from "../../data/projects";  // 分别暴露，选取个别项目做为展示

import "./HomePage.css"

// 导入主页轮播视频
import bannerH264 from "./videos/h264.mp4"
import bannerH264m from "./videos/h264-m.mp4"


// 主页面
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            muted: true
        }
    }

    // componentDidMount() {
    //     let video = document.querySelector('#h--splash video')
    //     video.setAttribute('muted', '')
    // }

    render() {

        let featuredOp = featured.map(project =>
            <WorkTile project={project} key={project.name} />
        )

        // 根据页面当前宽度选择不同尺寸的视频进行轮播
        let video = window.innerWidth > 760 ? bannerH264 : bannerH264m

        // Set up home boxes
        let question1 = <>This is <strong>who</strong> we <strong>are</strong></>
        let question2 = <>This is <strong>what</strong> we <strong>do</strong></>

        let list1 = [
            {word: 'creative', color: '#222'},
            {word: 'dynamic', color: '#111'},
            {word: 'hungry', color: '#080808'},
            {word: 'talented', color: '#151515'},
        ]

        let list2 = [
            {word: 'digital planning', color: '#1c1c1c'},
            {word: 'content design', color: '#161616'},
            {word: 'development execution', color: '#222'},
            {word: 'data collection', color: '#1a1a1a'},
        ]

        let link1 = {
            text: 'Check us out',
            href: '/team'
        }

        let link2 = {
            text: 'Learn more',
            href: '/services'
        }

        return (
            <>
                <div id={"h--splash"}>
                    {/* 主页视频轮播 */}
                    <video autoPlay={true} loop playsInline={true} muted={true}>
                        <source src={video} type={"video/mp4"} />
                    </video>

                    {/* 覆层 */}
                    <div id={"h--splash-overlay"}>{}</div>

                    {/* 内容部分 */}
                    <div id={"h--splash-content"}>
                        <div id={"h--splash-inner"}>
                            {/* 文字内容 */}
                            <div id={"h--splash-tagline"}>Creativity is<br></br> intelligence having<br></br>fun.</div>
                            {/*<img id={"home-splash-icons"} src={Icons} />*/}

                            {/* 跳转到我们的工作路由的链接 */}
                            <Link id={"h--splash-link"} to={"/work"}>Our <strong>Work</strong></Link>
                        </div>
                    </div>

                </div>

                {/* 关于我们 */}
                <div id={"h--about"}>
                    <HomeBox question={question1} list={list1} link={link1} />
                    <HomeBox question={question2} list={list2} link={link2} offset={2000} />
                </div>

                {/* 我们做过哪些 */}
                <div id={"h--featured"}>
                    {/* 标题 */}
                    <h2>And this is <strong>how</strong> we <strong>did</strong> it.</h2>

                    {/* 项目展示区域，默认展示六个项目 */}
                    <div className={"clearfix"}>{featuredOp}</div>
                </div>

            </>
        )

    }

}

export default HomePage