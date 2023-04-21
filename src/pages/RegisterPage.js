import React from "react";
import { Helmet } from "react-helmet";

function RegisterPage () {
    return (
    <>
        <Helmet>
            <title>Register - Ping Pong Tracker</title>
            <meta name="description" content="Register to log your ping pong scores with your friends and see how you stack up against one another." />
        </Helmet>
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                    <div className="col-lg-8 offset-2">
                    <div className="p-5">
                        <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user" method="post">
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control form-control-user"
                            id="username"
                            placeholder="Username"
                            name="username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            placeholder="Email Address"
                            name="email"
                            />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                                type="password"
                                className="form-control form-control-user"
                                id="txtNewPassword"
                                placeholder="Password"
                                name="password"
                            />
                            </div>
                            <div className="col-sm-6">
                            <input
                                type="password"
                                className="form-control form-control-user"
                                id="txtConfirmPassword"
                                placeholder="Repeat Password"
                                onchange="checkPasswordMatch();"
                            />
                            </div>
                        </div>
                        <div className="form-group">
                            <div
                            className="registrationFormAlert"
                            id="divCheckPasswordMatch"
                            />
                            <span className="pwd-s">Password Strength:</span>
                            <div id="progressBar">
                            <div id="progress-bar" />
                            </div>
                            <br />
                        </div>
                        <button
                            className="btn btn-primary btn-user btn-block"
                            type="submit"
                            name="register"
                            value="Register"
                        >
                            Register
                        </button>
                        <hr />
                        </form>
                        <hr />
                        <div className="text-center">
                        <a className="small" href="forgot-password.php">
                            Forgot Password?
                        </a>
                        </div>
                        <div className="text-center">
                        <a className="small" href="/login">
                            Already have an account? Login!
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </>
    );
}

export default RegisterPage;