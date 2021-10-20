import React, {Component, Fragment} from "react"
import {withRouter} from "react-router-dom"

// 加载项目列表。列表中每一项都是一个项目对象，该对象包含了项目的信息。
import {projects} from "../../data/projects";

import "./ProjectPage.css"

// 单个项目详情页面
class ProjectPage extends Component {

    constructor(props) {
        super(props)
        // 从url中获取用户选取的项目名字
        let slug = this.props.match.params.name

        // 根据用户选取的项目，从项目列表中选取出来。
        // slug为项目详情中的项目简称，与路由搭配使用
        this.project = projects.find(obj => obj.slug === slug)
    }

    render() {

        let project = this.project

        let awards;
        // 如果项目有awards的信息，则编写对应的jsx语句
        if (project.awards && project.awards.length > 0) {
            awards = project.awards.map((award, no) =>
                <div className={"p--award"} key={no}>
                    {/* 评奖组织的logo */}
                    <img src={award.image} alt={award.organization + ' logo'}/>
                    {/* 评奖组织的名字 */}
                    <label>{award.organization}</label>
                    {/* 获奖名称 */}
                    <div>{award.name}</div>
                </div>
            )
            awards = <div className={"p--awards"}>{awards}</div>
        }

        return (
            // Fragment 是一个编译后被删除的节点，目的是用来把所有的节点放进一个节点里（render只能return一个节点）
            <Fragment> 
                {/* 主视图效果部分 */}
                <div className={"p--splash"}>
                    {/* 最上方蒙板 */}
                    <div className={"p--overlay"}>{}</div>
                    {/* 代表项目的图片 */}
                    <img src={project.cover} alt={project.title + ' cover photo'} />
                    {/* 项目的标题 */}
                    <div className={"p--title"}>{project.title}</div>
                </div>

                {/* 项目的内容介绍 */}
                <div className={"p--content"}>

                    {/* 项目的详细信息 */}
                    <div className={"p--details"}>
                        {/* 第一列信息 */}
                        <div className={"p--details-column"}>
                            <div className={"p--detail"}>
                                {/* 项目使用了哪些技术 */}
                                {project.components}
                                <label>Components</label>
                            </div>
                            <div className={"p--detail"}>
                                {/* 项目的类型 */}
                                {project.type}
                                <label>Type</label>
                            </div>
                        </div>
                        {/* 第二列信息 */}
                        <div className={"p--details-column"}>
                            <div className={"p--detail"}>
                                {/* 项目的客户 */}
                                {project.client}
                                <label>Client</label>
                            </div>
                            <div className={"p--detail"}>
                                {/* 项目的地点 */}
                                {project.location}
                                <label>Location</label>
                            </div>
                        </div>
                    </div>

                    {/* 项目的简介 */}
                    <div className={"p--summary"}>
                        {project.summary}
                    </div>

                    {/* 项目的主要介绍部分，不同的项目里面的内容也不同 */}
                    <div className={"p--body"}>
                        {project.body}
                    </div>

                    {/* 项目获奖情况 */}
                    {awards}

                </div>

            </Fragment>
        )

    }

}

export default withRouter(ProjectPage)