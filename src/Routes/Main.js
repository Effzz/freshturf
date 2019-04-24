import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Handler from "./Handler"

class Main extends React.Component {
    render() {
        return(
            <Router>
                <Handler />
            </Router>
        )
    }
}

export default Main