import React from 'react'


import { Row, Container, Col, Form } from "react-bootstrap";

import "./Phone.css"






const Signin = ({ loginSubmit, otpSubmit, viewOtpForm }) => {


    return (

        <Container>
            {!viewOtpForm ? (
                <div>
                    <Container className="d-flex justify-content-center ">
                        <img src="	https://www.admitkard.com/images/admitkard_logo.svg" className="image-fluid mt-5 " style={{ height: "40px" }} />
                    </Container>

                    <Container >
                        <Row>
                            <Col>
                                <h2 className="text">Welcome Back</h2>
                                <p className="text_new" style={{ color: "grey" }}>Please sign in to your account</p>
                            </Col>
                        </Row>
                    </Container>
                    <form id="loginForm" onSubmit={loginSubmit}>
                        <div >
                            <label className="contact_number">Enter Contact Number</label>



                            <input

                                className="input"
                                maxLength="10"
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                autoComplete="false"
                            />
                        </div>
                        <p className="input_text">We will send you one time SMS message.<br />Charges May Apply.</p>
                        <button className="button" type="submit" id="sign-in-button">
                            Sign in
                        </button>
                    </form>
                </div>
            ) : (
                <div onSubmit={otpSubmit}>
                    <Container className="d-flex justify-content-center ">
                        <img src="	https://www.admitkard.com/images/admitkard_logo.svg" className="image-fluid mt-5 " style={{ height: "40px" }} />
                    </Container>
                    <Container className="d-flex justify-content-center mt-5 ">
                        <Row>
                            <Col>
                                <p className="otp_text mt-5">Please Verify Mobile Number</p>
                                <p className="text_otp  mt-5">An OTP is sent to your mobile number.</p>
                                <p className="text-center"><a className="change ">Change Phone Number</a></p>
                            </Col>
                        </Row>
                    </Container>

                    <form id="otpForm">
                        <div >

                            <input
                                className="input"
                                maxLength="6"
                                type="number"
                                placeholder="Enter 6-digit OTP"
                                name="otp_value"
                                autoComplete="false"
                            />

                        </div>

                        <button className="button" type="submit">
                            Verify OTP
                        </button>
                    </form>
                </div>
            )}
        </Container>
    );
};

export default Signin;