import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";

import logo from "./logo.png";

import "./Header.css";

// 页面头部分
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reduced: false,
            expanded: false // 导航菜单，默认是不展开的
        }
        this.monitorScroll()
    }

    monitorScroll = () => {
        document.addEventListener('scroll', () => {
            let scroll = document.documentElement.scrollTop
            if (this.state.reduced === false && scroll > 100) {
                this.setState({
                    reduced: true
                })
            } else if (this.state.reduced === true && scroll <= 100) {
                this.setState({
                    reduced: false
                })
            }
        })
    }

    // 页面右上角的导航菜单（汉堡包菜单）按钮
    toggleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {

        // 默认导航菜单是收起的状态
        let expandedClass = this.state.expanded ? 'expanded' : '';

        return (
            <header className={this.state.reduced ? 'reduced' : ''}>

                <div id={"header-bg"}>{}</div>

                {/* 页面左上角的logo，点击可以跳转到主页 */}
                <Link id={"logo"} to={"/"}>
                    <img src={logo} alt={"blackbox interactive company logo"} />
                </Link>

                {/* 页面右上角的导航菜单按钮 */}
                <div id={"menu-btn"} className={expandedClass} onClick={this.toggleExpand}>
                    <span>{}</span>
                    <span>{}</span>
                    <span>{}</span>
                </div>

                <div id={"nav-bg"} className={expandedClass}>{}</div>

                <nav className={expandedClass}>
                    <div className={"nav-inner"} onClick={this.toggleExpand}>
                        <NavLink exact to={"/"} >Home</NavLink>
                        <NavLink to={"/work"}>Work</NavLink>
                        <NavLink to={"/digital-solutions"}>Digital Solutions</NavLink>
                        <NavLink to={"/services"}>Services</NavLink>
                        {/*<NavLink to={"/labs"} onClick={this.toggleExpand}>Labs</NavLink>*/}
                        <NavLink to={"/team"}>Team</NavLink>
                        <NavLink to={"/careers"}>Careers</NavLink>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                </nav>

            </header>
        )
    }

}

export default Header;