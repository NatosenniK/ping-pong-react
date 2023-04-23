import React, {useState, useEffect, useContext} from 'react';
import SidebarContext from './sidebarContext';
import { NavLink } from 'react-router-dom';

function SideBar() {

    const { isSidebarToggled, setIsSidebarToggled } = useContext(SidebarContext);
    const sidebarClassName = isSidebarToggled ? 'toggled' : '';

    const handleSidebarToggle = () => {
        setIsSidebarToggled(!isSidebarToggled);
    };

  return (
    <>
        {/* Sidebar */}
        <ul
            className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  ${sidebarClassName}`}
            id="accordionSidebar"
        >

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-table-tennis" />
                </div>
                <div className="sidebar-brand-text mx-3">Ping Pong Tracker</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                    <i className="fas fa-fw fa-home" />
                    <span>Home</span>
                </NavLink>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Account Management</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                    <i className="fas fa-sign-in-alt" />
                    <span>Login</span>
                </NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/register">
                    <i className="fas fa-user" />
                    <span>Register</span>
                </NavLink>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Score Tracking</div>

            {/* Nav Item - Score Tracking */}
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/stats">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Stats</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/standings">
                    <i className="fas fa-fw fa-table" />
                    <span>Standings</span>
                </NavLink>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleSidebarToggle} />
            </div>
            
        </ul>
        {/* End of Sidebar */}
        </>

  );
}

export default SideBar;