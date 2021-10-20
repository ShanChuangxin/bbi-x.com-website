import React, {Component} from "react"

import team from "../../data/team";

import "./TeamPage.css"

export default class TeamPage extends Component {



    render() {

        // let x = 0;
        // 遍历成员列表，生成所有成员详细信息的jsx语句
        let members = team.map(member => {
            // x++
            return (
                <div className={"team-member"} key={member.name}>
                    <div className={"team-member-cover"}>
                        {/* 成员照片 */}
                        <img src={member.photo} alt={member.name + ' profile pic'}/>
                    </div>
                    
                    {/* 成员名字 */}
                    <div className={"team-member-name"}>{member.name}</div>

                    {/* 成员职位 */}
                    <div className={"team-member-title"}>{member.title}</div>
                </div>
            )
        })

        return (
            <div id={"team-list"} className={"clearfix"}>
                {members}
            </div>
        )

    }

}