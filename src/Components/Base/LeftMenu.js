import React from 'react'

class LeftMenu extends React.Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-text mx-3">Freshturf</div>
                </a>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Main Pages
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-box"></i>
                        <span>Repositories</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Setting</span></a>
                </li>

                <hr className="sidebar-divider"></hr>

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>

        )
    }
}

export default LeftMenu