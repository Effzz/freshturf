import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'

class CommitDetail extends React.Component {
    render() {
        const { name, owner, commitId } = this.props.match.params
        return (
            <BaseTemplate title="Dashboard - Commit Detail" subtitle="Information about the commit">
                commitId : { commitId }
                <br />
                owner : { owner }
                <br />
                name : { name }
            </BaseTemplate>
        )
    }
}

export default CommitDetail
