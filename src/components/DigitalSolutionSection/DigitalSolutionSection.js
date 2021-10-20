import React, {Component} from "react"

class DigitalSolutionSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMedia: 0
        }

        this.clientX = null
    }

    handleTouchStart = (e) => {
        this.clientX = e.touches[0].clientX
    }

    handleTouchEnd = (e) => {
        let activeMedia = this.state.activeMedia
        if (e.changedTouches[0].clientX > this.clientX + 20) {
            activeMedia = this.state.activeMedia - 1
        } else if (e.changedTouches[0].clientX < this.clientX - 20) {
            activeMedia++
        }

        if (activeMedia >= 0 && activeMedia < this.props.project.media.length) {
            this.setState({
                activeMedia: activeMedia
            })
        }
    }

    render() {

        let project = this.props.project

        let media = this.props.project.media.map(src => {
            let fileElement;
            if (src.indexOf('mp4') > -1) {
                fileElement = <video autoPlay={true} loop playsInline={true} muted={true}>
                    <source src={src} type={"video/mp4"}/>
                </video>
            } else {
                fileElement = <img src={src} alt={project.title + ' screenshot'} />
            }
            return (
                <div className={"d--snapshot"} key={src}>
                    {fileElement}
                </div>
            )
        })

        // 轮播图的指示器
        let indicators = this.props.project.media.map((src, no) => {
            return (
                <div className={"d--indicator" + (no === this.state.activeMedia ? ' active' : '')} key={no}>{}</div>
            )
        })

        let carouselX = 0 - (this.state.activeMedia * 100) + 'vw'

        return (
            <div className={"d--project"}>
                {/* 该解决方案的名称 */} 
                <div className={"d--title"}>{project.title}</div>
                {/* 该解决方案的客户 */}
                <div className={"d--client"}>{project.client}</div>

                {/* 图片或者视频的轮播 */}
                <div className={"d--carousel"}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd}>
                    <div className={"d--carousel-inner"} style={{left: carouselX}}>
                        {/* 该解决方案的静态资源 */}
                        {media}
                    </div>
                </div>

                {/* 轮播图指示器，屏幕足够宽（比如电脑上全屏）则没有，屏幕窄则有，比如手机上 */}
                <div className={"d--indicators"}>
                    {indicators}
                </div>

                {/* 该解决方案的详情介绍 */}
                <div className={"d--body"}>
                    {project.body}
                </div>

            </div>
        )

    }

}

export default DigitalSolutionSection