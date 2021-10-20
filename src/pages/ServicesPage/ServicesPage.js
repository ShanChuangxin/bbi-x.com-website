import React, {Component} from "react"

import "./ServicesPage.css"

class ServicesPage extends Component {

    render() {

        return (
            <>
            <div id={"services"} className={"clearfix"}>
                {/* 第一列 */}
                <div className={"services-item"}>
                    <div className={"services-name"}>Digital Planning</div>
                    <div className={"services-info"}>We brainstorm and shape plans with digital interactive activities for clients experiential marketing campaigns</div>
                </div>

                {/* 第二列 */}
                <div className={"services-item"}>
                    <div className={"services-name"}>Content Design</div>
                    <div className={"services-info"}>We craft user experiences content and design interfaces that work magic for our clients</div>
                </div>

                {/* 第三列 */}
                <div className={"services-item"}>
                    <div className={"services-name"}>Development Execution</div>
                    <div className={"services-info"}>We create innovative products and services, from customised programming development to actual implementation and project management</div>
                </div>

                {/* 第四列 */}
                <div className={"services-item"}>
                    <div className={"services-name"}>Data Collection</div>
                    <div className={"services-info"}>We collect valuable customer data and provide our clients with these information for post-event reviews and evaluations</div>
                </div>
            </div>
            </>
        )

    }

}

export default ServicesPage