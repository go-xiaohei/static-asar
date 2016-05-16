import React from "react"
import {Nav, NavItem, Icon} from "amazeui-react"

class SidebarNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Nav id="sidebar-nav">
            <NavItem><Icon icon="info-circle" size="sm" href="#">General</Icon></NavItem>
            <NavItem><Icon icon="file-text" size="sm" href="#">Posts</Icon></NavItem>
            <NavItem><Icon icon="file" size="sm" href="#">Pages</Icon></NavItem>
        </Nav>
    }
}

class LeftSidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <aside id="sidebar">
            <SidebarNav/>
        </aside>
    }
}

export default LeftSidebar