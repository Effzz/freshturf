import React from 'react'
import { Route, Switch } from "react-router-dom"

//screens
import Dashboard from '../Packages/Dashboard/Main'
import Repository from '../Packages/Repository/Main'
import Setting from '../Packages/Setting/Main'

const Handler = () => (
    <Switch>
        <Route exact path="/" component={ (props) => <Dashboard { ...props }/> } />
        <Route exact path="/repository" component={ (props) => <Repository { ...props }/> } />
        <Route exact path="/setting" component={ (props) => <Setting { ...props }/> } />
    </Switch>
)

export default Handler