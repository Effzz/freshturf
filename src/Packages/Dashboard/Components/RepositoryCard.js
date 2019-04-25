import React from 'react'

class RepositoryCard extends React.Component{
    render(){
        return(
            <div className="col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Contributed Repositories</h6>
                    </div>
                    <div className="card-body">
                        <div className="repositories">
                            <div className="item">
                                <span>laravel/framework</span>
                                <button>Browse</button>
                            </div>
                            <div className="item">
                                <span>laravel/docs</span>
                                <button>Browse</button>
                            </div>
                            <div className="item">
                                <span>laravel/telecsope</span>
                                <button>Browse</button>
                            </div>
                            <div className="item">
                                <span>illuminate/database</span>
                                <button>Browse</button>
                            </div>
                            <div className="item">
                                <span>laravel/nova-dusk-suite</span>
                                <button>Browse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RepositoryCard