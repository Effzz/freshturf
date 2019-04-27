import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import Filter from './Components/Filter'
import RowRepository from './Components/RowRepository'
import { connect } from 'react-redux'
import { settingMapStateToProps, settingMapDispatchToProps } from '../../Constant/SettingConst'
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser,
            langOpt: [
                { value: 'all', label: 'All Languages' },
                { value: 'css', label: 'CSS' },
                { value: 'elixir', label: 'Elixir' },
                { value: 'dockerfile', label: 'DockerFile' },
                { value: 'html', label: 'HTML' },
                { value: 'javascript', label: 'Javascript' },
                { value: 'php', label: 'PHP' },
                { value: 'phyton', label: 'Phyton' },
                { value: 'ruby', label: 'Ruby' },
                { value: 'shell', label: 'Shell' }
            ],
            selectedLang: { value: 'all', label: 'All Languages' }
        }

        this.reposQuery = gql`
            query GetRepositories($login: String!) {
                user(login: $login) {
                    id,
                    name,
                    contributionsCollection {
                        commitContributionsByRepository{
                            contributions (first:1, orderBy:{field: OCCURRED_AT, direction: DESC}) {
                                pageInfo {
                                endCursor
                                startCursor,
                                hasNextPage,
                                hasPreviousPage
                                }
                                nodes{
                                    repository {
                                        id,
                                        name,
                                        nameWithOwner,
                                        forkCount,
                                        url,
                                        primaryLanguage{
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }`

        this.handleChangeLang = this.handleChangeLang.bind(this)
    }

    handleChangeLang(selected){
        this.setState({
            selectedLang: selected
        })
    }

    render() {
        const { currentUser } = this.state
        return (
            <BaseTemplate title="Repositories" subtitle="List Repository" { ...this.props }>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
                            </div>
                            <div className="card-body">
                                <Filter 
                                    { ...this.props } 
                                    value={ this.state.selectedLang }
                                    options={ this.state.langOpt } 
                                    onChange={ this.handleChangeLang }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Repositories</h6>
                            </div>
                            <div className="card-body">
                                <Query query={ this.reposQuery } variables={{ login: currentUser }}>
                                    {({ data, loading, error }) => {
                                        let message = null
                                        if(loading){
                                            message = 'loading...'
                                        }
                                        if(error){
                                            message = 'error fetch...'
                                        }
                    
                                        let objLength = 0
                                        if(data){
                                            objLength = Object.getOwnPropertyNames(data).length
                                        }

                                        let repos = []
                                        if(data && data.user){
                                            repos = data.user.contributionsCollection.commitContributionsByRepository
                                        }

                                        if(objLength === 0){
                                            return message
                                        }
                                        
                                        return(
                                            <div className="repositories repository-list">
                                                {
                                                    repos.map((item, index) => {
                                                        const repoObj = item.contributions.nodes[0].repository
                                                        return(
                                                            <RowRepository { ...this.props } repoObj={ repoObj } key={ index } selectedLang={ this.state.selectedLang } />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }}
                                </Query>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        )
    }
}

export default connect(settingMapStateToProps, settingMapDispatchToProps)(Main)
