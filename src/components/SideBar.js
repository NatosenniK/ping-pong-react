import React, {useState, useEffect} from 'react';
//import { sidebarFunction } from '../js/SidebarCollapse';

function SideBar() {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 768) {
            closeMenu();
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsToggled(!isToggled);
    };

    const closeMenu = () => {
        setIsToggled(false);
    };

    const handleScroll = () => {
        const scrollDistance = window.pageYOffset;
        const scrollButton = document.querySelector('.scroll-to-top');
        if (scrollButton) {
        if (scrollDistance > 100) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTopClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
        }
    };
  return (
    <>
        {/* Sidebar */}
        <ul
            className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isToggled ? "toggled" : ""}`}
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
            <li className="nav-item active">
                <a className="nav-link" href="/">
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
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Score Tracking</div>

            {/* Nav Item - Score Tracking */}
            <li className="nav-item">
                <a className="nav-link" href="/stats">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Stats</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/standings">
                    <i className="fas fa-fw fa-table" />
                    <span>Standings</span>
                </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleMenu} />
            </div>
            
        </ul>
        {/* End of Sidebar */}
        </>

  );
}

export default SideBar;