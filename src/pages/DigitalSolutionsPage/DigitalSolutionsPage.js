import React, {Component} from "react"

// 导入解决方案列表。列表中的每一项都是一个解决方案。
import digitalSolutions from "../../data/digitalSolutions";
import DigitalSolutionSection from "../../components/DigitalSolutionSection/DigitalSolutionSection";

import "./DigitalSolutionsPage.css"

// 导入技术概览的背景图片
import codeImg from "./images/banners/screen-code.jpg"

class DigitalSolutionsPage extends Component {

    render() {

        let list = digitalSolutions.map(project => <DigitalSolutionSection project={project} key={project.title} />)

        return (
            <>
                <div id={"d--splash"}>
                    {/* 技术概览的背景图 */}
                    <img src={codeImg} alt={"digital solutions page software coding banner"} />

                    {/* 技术介绍 */}
                    <div id={"d--info"}>
                        <div id={"d--services"}>
                            H5 / Websites<br />
                            WeChat Mini Program<br />
                            iOS / Android
                        </div>
                        <div id={"d--text"}>Software solutions for standalone deployment and interactive components</div>
                    </div>
                </div>


                {/* 数字解决方案的展示列表 */}
                {list}

            </>
        )

    }

}

export default DigitalSolutionsPage