import React from 'react'
import { NavLink } from 'react-router-dom'

class LeftMenu extends React.Component {
    constructor(){
        super()
        this.state = {
            toggled: false
        }

        this.handleToggled = this.handleToggled.bind(this)
    }

    handleToggled(){
        const stateToggled = !this.state.toggled
        this.setState({
            toggled: !this.state.toggled
        })

        localStorage.setItem('SidebarToggled', stateToggled);
    }

    componentWillMount(){
        if(localStorage.getItem('SidebarToggled')){
            const stateToggled = JSON.parse(localStorage.getItem('SidebarToggled'))
            this.setState({
                toggled: stateToggled
            })
        }
    }

    render() {
        let toggledClass = ''
        if(this.state.toggled === true){
            toggledClass = 'toggled'
        }
        return (
            <ul className={ `left-menu navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${ toggledClass }` } id="accordionSidebar">
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center left-brand" to={ `/` }>
                    <div className="sidebar-brand-text mx-3">Freshturf</div>
                    <div className="toggled-circle">FT</div>
                </NavLink>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">Main Pages</div>
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="active" to={ `/` }>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={ `/repository` }>
                        <i className="fas fa-fw fa-box"></i>
                        <span>Repositories</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={ `/setting` }>
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Setting</span>
                    </NavLink>
                </li>

                <hr className="sidebar-divider"></hr>

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={ this.handleToggled }></button>
                </div>
            </ul>

        )
    }
}

export default LeftMenu