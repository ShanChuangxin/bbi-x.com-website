import React, {Component} from "react"

import "./ContactPage.css"

class ContactPage extends Component {

    render() {

        return (
            <div id={"inquiry-form-wrapper"}>

                <div id={"inquiry-form-content"}>

                    <h1>We'd love to hear from you</h1>

                    <div id={"inquiry-form-text"}>Blackbox is continuously looking for exciting new collaborations with companies and agencies of all sizes.</div>

                    <div id={"inquiry-form-contact"}>
                        <div>info@blackbox-interactive.com</div>
                        <div>+86 021 5295 7131</div>
                        <div>+86 158 0054 8408</div>
                    </div>

                </div>

            </div>
        )

    }

}

export default ContactPage