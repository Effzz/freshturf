import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { settingMapStateToProps, settingMapDispatchToProps } from '../../Constant/SettingConst'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            token: this.props.token
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e, type){
        if(type === 'user'){
            this.setState({
                currentUser: e.target.value
            })
        }else if(type === 'token'){
            this.setState({
                token: e.target.value
            })
        }
    }

    handleSubmit(e){
        const { currentUser, token } = this.state
        e.preventDefault()
        this.props.onChangeSetting(currentUser, token)
        toast.success('Configuration Updated')
    }
    
    render() {
        return (
            <BaseTemplate 
                title="Setting"
                subtitle="Change your setting here"
                { ...this.props }
            >
                <div className="col-xl-6">
                    <div className="card shadow mb-4">
                        <div className="card-header ">
                            <h6 className="m-0 font-weight-bold text-primary">Setting</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="form-group">
                                    <label>Fetch Username</label>
                                    <input 
                                        className="form-control" 
                                        value={ this.state.currentUser } 
                                        onChange={ (e) => {
                                            this.handleChange(e, 'user')
                                        }}
                                        required
                                    />
                                    <p>
                                        <small>
                                            <em>username used to fetch data</em>
                                        </small>
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-primary" onSubmit={ this.handleSubmit }>Submit</button>
                            </form>
                        </div>
                    </div>  
                </div>
            </BaseTemplate>
        )
    }
}

export default connect(settingMapStateToProps, settingMapDispatchToProps)(Main)
