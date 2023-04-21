import React from "react";
import MyChart from "./charts/MatchesPlayedChart";

function MatchesPlayed () {
    return (
        <>
          {/* Area Chart */}
            <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Matches Played</h6>
                    <div className="dropdown no-arrow">
                    <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                    </a>
                    {/*
                                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div class="dropdown-header">Dropdown Header:</div>
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                                    */}
                    </div>
                </div>
                {/* Card Body */}
                <div className="card-body">
                    <div className="chart-area">
                    <MyChart />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default MatchesPlayed;