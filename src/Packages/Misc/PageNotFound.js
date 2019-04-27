import React from 'react'
import { connect } from 'react-redux'
import { settingMapStateToProps, settingMapDispatchToProps } from '../../Constant/SettingConst'
import { NavLink } from 'react-router-dom'


class LoginMain extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="container-fluid">
                        <div className="text-center">
                            <div className="error mx-auto">404</div>
                            <p className="lead text-gray-800 mb-5">Page Not Found</p>
                            <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                            <NavLink to={ `/` }>← Back to Dashboard</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(settingMapStateToProps, settingMapDispatchToProps)(LoginMain)
