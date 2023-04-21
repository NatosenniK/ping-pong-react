import React from "react";

function QuickStats () {
    return (
            <>
                {/* Top Player */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            This Week's Top Player
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tom</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-medal fa-2x text-gray-300" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Most Wins  */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Most Wins
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Tom</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-trophy fa-2x text-gray-300" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Most Points */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Most Points Scored
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">Bob</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-angle-double-up fa-2x text-gray-300" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Top Rated Player */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Top Rated Player
                            </div>
                            <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">Matt</div>
                            </div>
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                <div className="elo-rating">ELO: 1900</div>
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "95%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-chart-line fa-2x text-gray-300" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>

    );
}

export default QuickStats;