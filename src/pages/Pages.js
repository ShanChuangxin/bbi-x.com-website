// 引入库
import React, {Component} from "react"
import {Route, Switch, withRouter} from "react-router-dom";
// 导入特效、动画相关的库
import {CSSTransition, TransitionGroup} from "react-transition-group";

// 引入样式文件
import "./Pages.css"

// 引入普通组件
import Footer from "../components/Footer/Footer";

// 引入路由组件
import HomePage from "./HomePage/HomePage";
import ProjectPage from "./ProjectPage/ProjectPage";
import TeamPage from "./TeamPage/TeamPage";
import WorkPage from "./WorkPage/WorkPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ContactPage from "./ContactPage/ContactPage";
import CareersPage from "./CareersPage/CareersPage";
import DigitalSolutionsPage from "./DigitalSolutionsPage/DigitalSolutionsPage";

class Pages extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.prepAnimation()
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
        }
    }

    prepAnimation = () => { // Get ready for the CSS animation

        let wrapper = document.querySelector('.wrapper:last-of-type');
        wrapper.style.height = '100vh'

        let offset = document.documentElement.scrollTop
        let page = document.querySelector('.wrapper:last-of-type .page')
        page.style.top = '-' + offset + 'px'

        // Set scroll top top
        window.scrollTo(0, 0)
    }


    render() {

        return (

            <TransitionGroup>
                <CSSTransition key={this.props.location.key} timeout={3000} className="wrapper">

                    <div className={"wrapper"}>
                        <div className={"page"}>

                            <Switch location={this.props.location}>
                                {/* 匹配根路径 */}

                                <Route exact path={"/"}>
                                    {/* 主页面 */}
                                    <HomePage/>
                                </Route>

                                <Route exact path={"/work"}>
                                    {/* 项目列表页面 */}
                                    <WorkPage />
                                </Route>

                                <Route exact path={"/project/:name"}>
                                    {/* 单个项目详情页面 */}
                                    <ProjectPage/>
                                </Route>

                                <Route exact path={"/digital-solutions"}>
                                    {/* 数字解决方案（技术领域）页面 */}
                                    <DigitalSolutionsPage />
                                </Route>

                                <Route exact path={"/services"}>
                                    {/* 可提供的服务内容页面 */}
                                    <ServicesPage />
                                </Route>

                                <Route exact path={"/team"}>
                                    {/* 公司成员页面 */}
                                    <TeamPage />
                                </Route>

                                <Route exact path={"/careers"}>
                                    {/* 公司生涯页面 */}
                                    <CareersPage />
                                </Route>

                                <Route exact path={"/contact"}>
                                    {/* 联系我们页面 */}
                                    <ContactPage />
                                </Route>


                            </Switch>

                            {/* 页面底部内容是固定的 */}
                            <Footer />

                        </div>
                    </div>

                </CSSTransition>
            </TransitionGroup>

        )

    }

}

export default withRouter(Pages)