import React from 'react';

function SideBar() {
  return (
    <>
        {/* Sidebar */}
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}
            <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
            >
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-table-tennis" />
            </div>
            <div className="sidebar-brand-text mx-3">Ping Pong Tracker</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
            <a className="nav-link" href="http://localhost/ping-pong/">
                <i className="fas fa-fw fa-home" />
                <span>Home</span>
            </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Account Management</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
            <a className="nav-link" href="/login">
                <i className="fas fa-sign-in-alt" />
                <span>Login</span>
            </a>
            <a className="nav-link" href="/register">
                <i className="fas fa-user" />
                <span>Register</span>
            </a>
            '
            {/*
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>My Account</span>
                </a>
                
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Account Management</h6>
                        <a class="collapse-item" href="buttons.html">Login</a>
                        <a class="collapse-item" href="cards.html">Register</a>
                    </div>
                </div>
                */}
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            {/*
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>
            */}
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Score Tracking</div>
            {/* Nav Item - Pages Collapse Menu */}
            {/*
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
            */}
            {/* Nav Item - Charts */}
            <li className="nav-item"></li>
            <li className="nav-item">
            <a className="nav-link" href="stats.php">
                <i className="fas fa-fw fa-chart-area" />
                <span>Stats</span>
            </a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
            <a className="nav-link" href="standings.php">
                <i className="fas fa-fw fa-table" />
                <span>Standings</span>
            </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            {/* Sidebar Message */}
            {/*
            <div class="sidebar-card">
                <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="">
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
            */}
        </ul>
        {/* End of Sidebar */}
        </>

  );
}

export default SideBar;