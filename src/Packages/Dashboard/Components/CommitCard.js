import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { NavLink } from 'react-router-dom'
import Paginate from './Paginate'

class CommitCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser,
            indexPage: 1,
            afterCursor: null,
            beforeCursor: null,
            limit: 20
        }

        this.commitQuery = gql`
        query GetUserCommits($login: String!, $limit:Int!, $after:String, $before:String) {
            user(login: $login) {
                id,
                name,
                commitComments(first: $limit, after: $after, before: $before){
                    pageInfo {
                        endCursor
                        startCursor,
                        hasNextPage,
                        hasPreviousPage
                    },
                    totalCount,
                    edges {
                        cursor,
                            node {
                            id,
                            commit {
                            oid,
                            pushedDate,
                            message,
                            repository{
                                    nameWithOwner,
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }              
        `

        this.handlePagination = this.handlePagination.bind(this)
    }

    handlePagination(e, type, cursor) {
        e.preventDefault()
        const CurrIndexPage = this.state.indexPage
        const newIndexPageNext = CurrIndexPage + 1
        const newIndexPagePrev = CurrIndexPage - 1
        if(type === 'next'){
            this.setState({
                afterCursor: cursor,
                beforeCursor: null,
                indexPage: newIndexPageNext
            })
        }else{
            if(newIndexPagePrev <= 1){
                this.setState({
                    afterCursor: null,
                    beforeCursor: null,
                    indexPage: 1
                })
            }else{
                this.setState({
                    afterCursor: null,
                    beforeCursor: cursor,
                    indexPage: newIndexPagePrev
                })
            }
        }
    }

    render() {
        const { currentUser, limit, afterCursor, beforeCursor } = this.state
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        return (
            <div className="col-lg-8">
                <Query query={this.commitQuery} variables={{ login: currentUser, limit: limit, after: afterCursor, before: beforeCursor }}>
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

                        let commits = []
                        let pageInfo = null
                        if (data && data.user) {
                            commits = data.user.commitComments.edges
                            pageInfo = data.user.commitComments.pageInfo
                        }

                        return (
                            <div className="card shadow mb-4 card-commit-history">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Recent Commits</h6>
                                    <Paginate 
                                        pageInfo={ pageInfo } 
                                        handlePagination={ this.handlePagination }
                                        firstPageCursor={ this.state.firstPageCursor }
                                        setFirstPageCursor={ this.setFirstPageCursor }
                                        paginateStarted={ this.state.paginateStarted }
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="commits">
                                        {
                                            !loading && objLength > 0 ?
                                                commits.map((data, index) => {
                                                    let row = data.node.commit
                                                    let currDate = new Date(row.pushedDate)
                                                    let formattedDate = monthNames[currDate.getMonth()] + " " + currDate.getDate() + ", " + currDate.getFullYear()

                                                    return (
                                                        <div className="item" key={index}>
                                                            <span className="date">{formattedDate}</span>
                                                            <span className="repository">{row.repository.nameWithOwner}</span>
                                                            <span className="commit-message">{row.message}</span>
                                                            <div className="wrap-buttons">
                                                                <a
                                                                    className="view-repository"
                                                                    title="Browse Repository"
                                                                    href={row.repository.url} target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >Browse</a>
                                                                <NavLink
                                                                    className="commit-detail"
                                                                    title="View Detail"
                                                                    to={`/commit/${row.repository.nameWithOwner}/${row.oid}`}
                                                                >Detail</NavLink>
                                                            </div>
                                                        </div>
                                                    )
                                                }) :
                                                message
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default CommitCard