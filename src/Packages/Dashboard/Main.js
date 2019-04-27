import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import ProfileCard from './Components/ProfileCard'
import RepositoryCard from './Components/RepositoryCard'
import CommitCard from './Components/CommitCard'
import { Redirect } from 'react-router-dom'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            redirectTo: null
        }
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleRedirect(url){
        this.setState({
            redirectTo: url
        })
    }
    
    render() {
        if(this.state.redirectTo){
            return(<Redirect to={ this.state.redirectTo }></Redirect>)
        }
        return (
            <BaseTemplate title="Dashboard" subtitle="Github Repository Dashboard">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <ProfileCard { ...this.props } handleRedirect={ this.handleRedirect }/>
                            <RepositoryCard { ...this.props } handleRedirect={ this.handleRedirect }/>
                        </div>
                    </div>
                    <CommitCard { ...this.props } handleRedirect={ this.handleRedirect }/>
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
