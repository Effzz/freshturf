import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'
import Filter from './Components/Filter'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            langOpt: [
                { value: 'php', label: 'PHP' },
                { value: 'phyton', label: 'Phyton' },
                { value: 'javascript', label: 'Javascript' },
                { value: 'ruby', label: 'Ruby' }
            ],
            selectedLang: { value: 'php', label: 'PHP' }
        }

        this.handleChangeLang = this.handleChangeLang.bind(this)
    }

    handleChangeLang(selected){
        this.setState({
            selectedLang: selected
        })
    }

    render() {
        return (
            <BaseTemplate title="Repositories" subtitle="List Repository">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Filters</h6>
                            </div>
                            <div className="card-body">
                                <Filter { ...this.props } options={ this.state.langOpt } onChange={ this.handleChangeLang }/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Repositories</h6>
                                <div className="commit-pagination">
                                    <button className="prev disabled" disabled>
                                        <i className="fas fa-angle-left"></i>
                                    </button>
                                    <button className="next">
                                        <i className="fas fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="repositories repository-list">
                                    <div className="item">
                                        <span className="language">PHP</span>
                                        <span className="fork-count">6907 forks</span>
                                        <span className="title">laravel/framework</span>
                                        <button>Browse</button>
                                    </div>
                                    <div className="item">
                                        <span className="language">PHP</span>
                                        <span className="fork-count">6907 forks</span>
                                        <span className="title">laravel/docs</span>
                                        <button>Browse</button>
                                    </div>
                                    <div className="item">
                                        <span className="language">PHP</span>
                                        <span className="fork-count">6907 forks</span>
                                        <span className="title">laravel/telecsope</span>
                                        <button>Browse</button>
                                    </div>
                                    <div className="item">
                                        <span className="language">PHP</span>
                                        <span className="fork-count">6907 forks</span>
                                        <span className="title">illuminate/database</span>
                                        <button>Browse</button>
                                    </div>
                                    <div className="item">
                                        <span className="language">PHP</span>
                                        <span className="fork-count">6907 forks</span>
                                        <span className="title">laravel/nova-dusk-suite</span>
                                        <button>Browse</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
