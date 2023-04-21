import React from "react";

function PlayerRatings () {
    return (
        <>
            <div className="col-xl-6 col-lg-6">
                {/* Project Card Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Player Ratings</h6>
                    </div>
                    <div className="card-body player-ratings">
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Matt:
                            <span className="float-right">2021</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-0"
                                    role="progressbar"
                                    style={{ width: "99%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Tom:
                            <span className="float-right">1990</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-1"
                                    role="progressbar"
                                    style={{ width: "88%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Bob:
                            <span className="float-right">1920</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-2"
                                    role="progressbar"
                                    style={{ width: "79%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Jim:
                            <span className="float-right">1900</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-3"
                                    role="progressbar"
                                    style={{ width: "69%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Ted:
                            <span className="float-right">1850</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-4"
                                    role="progressbar"
                                    style={{ width: "59%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                        <div className="player-rating-bar">
                            <h4 className="small font-weight-bold">
                            Red:
                            <span className="float-right">1800</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bar-5"
                                    role="progressbar"
                                    style={{ width: "49%" }}
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={2000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PlayerRatings;