import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import ProfileCard from './Components/ProfileCard'
import RepositoryCard from './Components/RepositoryCard'
import CommitCard from './Components/CommitCard'

class Main extends React.Component {
    render() {
        return (
            <BaseTemplate title="Dashboard" subtitle="Github Repository Dashboard">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <ProfileCard { ...this.props } />
                            <RepositoryCard { ...this.props } />
                        </div>
                    </div>
                    <CommitCard { ...this.props } />
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
