import React, {Component} from "react"
import {Link} from "react-router-dom"
import {CSSTransition} from "react-transition-group"

import "./HomeBox.css"

class HomeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
                this.loop = window.setInterval(() => {
                let active = this.state.active + 1
                if (active > this.props.list.length - 1) active = 0
                this.setState({
                    active: active
                })
            }, 4000)
        }, this.props.offset || 0)

    }

    componentWillUnmount() {
            window.clearInterval(this.loop)
    }


    render() {

        let items = this.props.list.map((item, no) => {
            return (
                <CSSTransition in={this.state.active === no} key={no} timeout={1500} className={"h--box-item"} mountOnEnter unmountOnExit>
                    <div className={"h--box-item"}>{item.word}</div>
                </CSSTransition>
            )
        })

        // let color = this.props.list[this.state.active].color

        let overlays = this.props.list.map((item, no) => {
            return (
                <CSSTransition in={this.state.active === no} key={no} timeout={1500} className={"h--box-overlay"} mountOnEnter unmountOnExit>
                    <div className={"h--box-overlay"} style={{background: item.color}}>{}</div>
                </CSSTransition>
            )
        })

        return (
            <div className={"h--box"}>

                {overlays}

                <h2>{this.props.question}</h2>

                <div className={"h--box-items"}>
                    {items}
                </div>

                <Link to={this.props.link.href} className={"h--box-link"}>
                    {this.props.link.text}
                </Link>

            </div>
        )

    }

}

export default HomeBox