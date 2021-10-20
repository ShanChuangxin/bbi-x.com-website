import React, {Component} from "react"
import {Link} from "react-router-dom";

class WorkTile extends Component {

    expandTile = (e) => {
        // console.log(e.target)

        let tile = e.target
        let rect = tile.getBoundingClientRect()

        tile.classList.add('expand')

        let inner = tile.querySelector('.work-tile-inner')
        inner.style.top = rect.top + 'px'
        inner.style.left = rect.left + 'px'
        inner.style.height = rect.height + 'px'
        inner.style.width = rect.width + 'px'

        window.setTimeout(() => {
            tile.classList.add('expand-active')
            inner.style.top = '0'
            inner.style.left = '0'
            inner.style.height = '100vh'
            inner.style.width = '100vw'
        }, 10)
    }

    render() {

        let project = this.props.project

        return (
            <Link to={"/project/" + project.slug} className={"work-tile"}
                onClick={this.expandTile}>
                <div className={"work-tile-inner"}>
                    <img src={project.cover} alt={project.name + ' cover'} />
                    <div className="work-tile-tag" style={{transitionDelay: (Math.random().toFixed(2) / 10) + 's'}}>
                        <div>{project.name}</div>
                        <div className={"work-tile-client"}>{project.client}</div>
                    </div>
                </div>
            </Link>
        )

    }

}

export default WorkTile