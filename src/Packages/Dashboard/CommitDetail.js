import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import { connect } from 'react-redux'
import { settingMapStateToProps, settingMapDispatchToProps } from '../../Constant/SettingConst'
import { NavLink } from 'react-router-dom'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

class CommitDetail extends React.Component {
    constructor(){
        super()
        this.detailCommitQuery = gql`
            query GetDetailCommit($owner: String!, $name: String!, $commitId: String!){
                repository (owner:$owner, name:$name){
                    commit: object(expression: $commitId) {
                    ... on Commit {
                        oid,
                        messageHeadline,
                        message,
                        url,
                        changedFiles,
                        committedDate,
                        committer {
                            date
                            email
                            name
                        }
                    }
                }
            }
        }        
        `
    }
    render() {
        const { name, owner, commitId } = this.props.match.params
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        return (
            <BaseTemplate title="Dashboard - Commit Detail" subtitle="Information about the commit" {...this.props} >
                <div className="col-lg-9">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Commit : {commitId}</h6>
                        </div>
                        <div className="card-body">
                            <Query query={this.detailCommitQuery} variables={{ owner: owner, name: name, commitId: commitId }}>
                                {({ data, loading, error }) => {
                                    let message = null
                                    if (loading) {
                                        message = 'loading...'
                                    }
                                    if (error) {
                                        message = 'error fetch...'
                                    }

                                    let objLength = 0
                                    if (data) {
                                        objLength = Object.getOwnPropertyNames(data).length
                                    }

                                    if(objLength > 0){
                                        const commit = data.repository.commit
                                        console.log(commit)

                                        let currDate = new Date(commit.committedDate)
                                        let formattedDate = monthNames[currDate.getMonth()] + " " + currDate.getDate() + ", " + currDate.getFullYear()
                                        return(
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Committed Date</strong></td>
                                                        <td>{ formattedDate }</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>OID</strong></td>
                                                        <td>{ commit.oid }</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Headline Message</strong></td>
                                                        <td>{ commit.messageHeadline }</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Message</strong></td>
                                                        <td>{ commit.message }</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Commit URL</strong></td>
                                                        <td><a href={ commit.url } target="_blank" rel="noopener noreferrer">{ commit.url }</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Changed Files</strong></td>
                                                        <td>{ commit.changedFiles }</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        )
                                    }else{
                                        return(<div>{ message }</div>)
                                    }
                                }}
                            </Query>
                            <NavLink to="/" className="btn btn-secondary btn-back">
                                <span className="text">Back</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        )
    }
}

export default connect(settingMapStateToProps, settingMapDispatchToProps)(CommitDetail)