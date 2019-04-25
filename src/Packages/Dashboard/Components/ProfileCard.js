import React from 'react'

class ProfileCard extends React.Component{
    render(){
        return(
            <div className="col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Github Profile</h6>
                    </div>
                    <div className="card-body">
                        <div className="wrap-profile">
                            <div className="photo">
                                <img src="https://avatars0.githubusercontent.com/u/463230?s=460&amp;v=4" alt="" />
                            </div>
                            <div className="profile">
                                <div className="profile-row">
                                    <span className="value name">Taylor Otwell</span>
                                </div>
                                <div className="profile-row">
                                    <span className="value company">Laravel</span>
                                </div>
                                <div className="profile-row">
                                    <a href="mailto:taylor@laravel.com">
                                        <span className="value email">taylor@laravel.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard