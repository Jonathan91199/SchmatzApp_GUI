import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logo from '../../Assets/Pictures/logo.png'
import { Button, Form, Row, Col } from 'react-bootstrap'
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';


import './LoginPageStyle.css'

class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
        this.state = { register: true }
    }
    handleRegisterClick() {
        this.setState({ register: !this.state.register })
    }

    render() {
        return (
            <div className="LoginMainDiv">
                <div className="ani">

                    <img className="LoginLogo" src={Logo} alt=""></img>
                    <span className="LoginSpan ParentCenterDiv">SchmatzApp</span>
                    {
                        this.state.register ?
                            <div>


                                <div className="ParentCenterDiv LoginFormParent"><Form.Control className="LoginForm" id="userNameId" placeholder="User Name"></Form.Control></div>
                                <div className="ParentCenterDiv LoginFormParent"><Form.Control type="password" className="LoginForm" id="passwordId" placeholder="Password"></Form.Control></div>
                                <div className="LoginParentButton"><Button className="LoginButton">Login</Button></div>
                                <div className="ParentCenterDiv SignInOption">Don't Have a User ? &nbsp;<div className="RegisterOption" onClick={this.handleRegisterClick}>Register Now</div></div>
                            </div>
                            :
                            <Col className="Register">

                                <Row className="RegisterRow">
                                    <Col className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm"  placeholder="User Name"></Form.Control></Col>
                                    <Col className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm"  placeholder="Email Address"></Form.Control></Col>
                                    <Col className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm"  placeholder="Password"></Form.Control></Col>
                                    <Col className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm"  placeholder="Repeat Password"></Form.Control></Col>
                                </Row>
                               
                                <Row className="RegisterRow">
                                    <div className="ParentCenterDiv SignInOption"><div className="RegisterOption" onClick={this.handleRegisterClick}>Sign In</div></div>

                                </Row>

                            </Col>
                    }



                </div>
            </div>


        )
    }
}
export default connect(store => store)(LogInPage)