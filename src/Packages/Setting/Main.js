import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'

class Main extends React.Component{
    render() {
        return (
            <BaseTemplate 
                title="Setting"
                subtitle="Change your setting here"
            >
                <div className="col-xl-6">
                    <div className="card shadow mb-4">
                        <div className="card-header ">
                            <h6 className="m-0 font-weight-bold text-primary">Repositories</h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Fetch Username</label>
                                    <input className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Auth username</label>
                                    <input className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Auth Password</label>
                                    <input className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>  
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
