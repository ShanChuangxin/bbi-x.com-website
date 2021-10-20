import React, {Component} from "react"
import {NavLink} from "react-router-dom"

import "./Footer.css"

class Footer extends Component {

    render() {

        return (
            <footer>

                <div className={"footer-inner"}>

                    {/* 第一列 */}
                    <div className={"footer-column"}>
                        <div className={"footer-heading"}>Find us.</div>
                        <div style={{lineHeight: '2em'}}><strong>黄陂南路751号4号楼301</strong><br></br><br></br>
                            4-301, No. 751 South HuangPi Rd<br></br>
                            Shanghai 200333<br></br>
                            +86 021 5295 7131 / +86 158 0054 8408<br></br>
                            info@blackbox-interactive.com
                        </div>
                    </div>

                    {/* 第二列 */}
                    <div className={"footer-column"}>
                        <div className={"footer-heading"}>Discover us.</div>
                        <NavLink to="/work">Work</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        {/*<NavLink to="/work">Products</NavLink>*/}
                        {/*<NavLink to="/labs">Labs</NavLink>*/}
                    </div>

                    {/* 第三列 */}
                    <div className={"footer-column"}>
                        <div className={"footer-heading"}>Join us.</div>
                        <NavLink to="/team">Team</NavLink>
                        <NavLink to="/careers">Careers</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* 第四列 */}
                    <div className={"footer-column"}>
                        <div className={"footer-heading"}>Stalk us.</div>
                        <a href="https://www.facebook.com/blackboxinteractive1/">Facebook</a>
                        <a href="https://instagram.com/blackbox_interactive/">Instagram</a>
                        {/*<NavLink to="/contact">Wechat</NavLink>*/}
                    </div>

                </div>

            </footer>
        )
    }

}

export default Footer