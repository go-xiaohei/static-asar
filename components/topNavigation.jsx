import React from "react"
import {Topbar, Nav, NavItem, Icon} from "amazeui-react"

class TopNavBrand extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div id="nav-brand">
            <img src="https://hexo.io/logo.svg" alt="staticgen-logo" width="32" id="top-logo"/>
            <span id="top-title">A fast, simple & powerful blog framework</span>
        </div>
    }
}

class TopNavigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Topbar inverse id="header" fixedTop fluid>
            <TopNavBrand/>
            <Nav id="header-setting-nav">
                <NavItem><Icon icon="cogs" href="#"/></NavItem>
            </Nav>
        </Topbar>
    }
}

export default TopNavigation