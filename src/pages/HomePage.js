import React, {useState} from 'react';
import { Helmet } from 'react-helmet';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import QuickStats from '../components/QuickStats';
import MatchesPlayed from '../components/MatchesPlayed';
import PlayerRatings from '../components/PlayerRatings';
import SidebarContext from '../components/sidebarContext';

function HomePage() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  return (
    <div>
      <>
      <Helmet>
        <title>Ping Pong Tracker - See Where You Rank</title>
        <meta name="description" content="Log your ping pong scores with your friends and see how you stack up against one another." />
      </Helmet>
      {/* Page Wrapper */}
      <div id="wrapper">
        <SidebarContext.Provider value={{ isSidebarToggled, setIsSidebarToggled }}>
        {/* Sidebar */}
          <SideBar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}

            <TopBar />
            
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Ping Pong Tracker Stats</h1>
              </div>
              <div className='row'>
                <QuickStats />
              </div>
              <div className="row">
                <MatchesPlayed />
                <PlayerRatings />
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Ping Pong Tracker 2023</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
        </SidebarContext.Provider>  
      </div>
      {/* End of Page Wrapper */}
    </>

    </div>
  );
}

export default HomePage;