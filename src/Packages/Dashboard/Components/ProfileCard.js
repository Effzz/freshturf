import React from 'react'
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

class ProfileCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentUser: this.props.currentUser
        }

        this.profileQuery = gql`
            query GetUserProfile($login: String!) {
                user(login: $login) {
                id,
                name,
                avatarUrl,
                bio,
                company
                }
            }       
        ` 
    }
    render(){
        const { currentUser } = this.state
        return(
            <div className="col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Github Profile</h6>
                    </div>
                    <div className="card-body">
                        <Query query={ this.profileQuery } variables={{ login: currentUser}}>
                            {({ data, loading, error }) => {
                                let message = null
                                if(loading){
                                    message = 'loading...'
                                }
                                if(error){
                                    message = 'error fetch...'
                                }

                                let objLength = 0
                                let userData = null
                                if(data){
                                    objLength = Object.getOwnPropertyNames(data).length
                                    userData = data.user
                                }

                                if(objLength === 0){
                                    return message
                                }
                                
                                return(
                                    <div className="wrap-profile">
                                        <div className="photo">
                                            <img src={ userData.avatarUrl } alt="" />
                                        </div>
                                        <div className="profile">
                                            <div className="profile-row">
                                                <span className="value name">{ `${ userData.name } (${ currentUser })` }</span>
                                            </div>
                                            <div className="profile-row">
                                                <span className="value company">{ userData.company }</span>
                                            </div>
                                            <div className="profile-row">
                                                <span className="value company">{ userData.bio }</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }}
                        </Query>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard