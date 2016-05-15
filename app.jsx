import React from "react"
import Dom from "react-dom"
import TopNavigation from "./components/topNavigation.jsx"
import LeftSidebar from "./components/leftSidebar.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <TopNavigation/>
            <LeftSidebar/>
            this is root container
        </div>
    }
}

Dom.render(<App/>, document.getElementById("root"));