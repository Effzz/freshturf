import React from 'react'
import { NavLink } from 'react-router-dom'
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const reposQuery = gql`
query GetRepositories($login: String!, $maxRepo:Int!) {
    user(login: $login) {
        id,
        name,
        contributionsCollection {
            commitContributionsByRepository(maxRepositories: $maxRepo){
                contributions (first:1, orderBy:{field: OCCURRED_AT, direction: DESC}) {
                    nodes{
                        repository {
                            id,
                            name,
                            nameWithOwner,
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

class RepositoryCard extends React.Component{
    render(){
        
        return(
            <Query query={reposQuery} variables={{ login: "taylorotwell", maxRepo: 5}}>
                {({ data, loading, error }) => {
                    let message = null
                    if(loading){
                        message = 'loading...'
                    }
                    if(error){
                        message = 'error fetch...'
                    }

                    const objLength = Object.getOwnPropertyNames(data).length
                    let repos = []
                    if(data && data.user){
                        repos = data.user.contributionsCollection.commitContributionsByRepository
                    }
                    
                    return(
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Contributed Repositories</h6>
                                </div>
                                <div className="card-body">
                                    {
                                        objLength === 0 ? 
                                        message : 
                                        <div className="repositories">
                                            {
                                                repos.map((item, index) => {
                                                    const repoObj = item.contributions.nodes[0].repository
                                                    return(
                                                        <div className="item" key={ index }>
                                                            <span>{ repoObj.nameWithOwner }</span>
                                                            <a className="button-browse" href={ repoObj.url } target="_blank" rel="noopener noreferrer">Browse</a>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            <NavLink className="view-more-link" to="/repository">view more</NavLink>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default RepositoryCard