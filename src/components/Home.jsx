
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./Home.css"

const Home = ({ signOut, user }) => {
    console.log(user);
    return (
        <Container className="d-flex justify-content-center ">
            <Row>
                <Col>
                    <img src="https://www.admitkard.com/student/static/assets/img/benefit_1.svg" className="img-fluid" />
                    <p className="mt-5 head text-center" >Welcome To AdmitKard, 👋</p>
                    <p className="text-center align">In order to provide you with<br />
                        a custom experience,<br />
                        we need to ask you a few questions.</p>

                    <button className="button" id="signOut" onClick={signOut} >
                        Sign Out
                    </button>


                </Col>
            </Row>

        </Container>
    );
};

export default Home;
