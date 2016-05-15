import React from "react"
import {Topbar, Nav, NavItem, Icon} from "amazeui-react"

class TopNavigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Topbar inverse id="header" fixedTop fluid>
            <Nav id="header-setting-nav">
                <NavItem><Icon icon="cogs" href="#"/></NavItem>
            </Nav>
        </Topbar>
    }
}

export default TopNavigation