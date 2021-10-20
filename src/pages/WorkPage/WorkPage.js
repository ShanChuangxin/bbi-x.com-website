import React, {Component} from "react"

import WorkTile from "../../components/WorkTile/WorkTile";
import {projects} from "../../data/projects";

import "./WorkPage.css"

// 项目列表页面
class WorkPage extends Component {

    render() {

        let projectsOp = projects.map(project =>
            <WorkTile project={project} key={project.name} />
        )

        return (
            <>
                {/* 项目页面提示文案 */}
                <div id={"w--help-bar"}>
                    <div id={"w--help"}>select a project below for more details</div>
                </div>

                {/* 项目列表 */}
                <div id={"w--projects"} className={"clearfix"}>
                    {projectsOp}
                </div>

            </>
        )

    }

}

export default WorkPage