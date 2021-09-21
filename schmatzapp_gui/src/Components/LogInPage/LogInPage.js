import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logo from '../../Assets/Pictures/logo.png'
import { Button, Form, Row, Col } from 'react-bootstrap'


import './LoginPageStyle.css'

class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.state = { register: false }
    }
    handleRegisterClick() {
        this.setState({ register: !this.state.register })
    }
    handleLoginClick(){
        const USER_NAME = document.getElementById('userNameId').value
        const PASSWORD = document.getElementById('passwordId').value
        logIn(USER_NAME, PASSWORD, ()=>{
            
        })
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
                                <div className="LoginParentButton"><Button onClick={this.handleLoginClick} className="LoginButton">Login</Button></div>
                                <div className="ParentCenterDiv SignInOption">Don't Have a User ? &nbsp;<div className="RegisterOption" onClick={this.handleRegisterClick}>Register Now</div></div>
                            </div>
                            :
                            <Col className="Register">

                                    <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="User Name"></Form.Control></Row>
                                    <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Email Address"></Form.Control></Row>
                                    <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Password"></Form.Control></Row>
                                    <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Repeat Password"></Form.Control></Row>

                                <Row className="RegisterRow">
                                    <div className="RegisterParentButton"><Button className="RegisterButton">Register Now !</Button></div>

                                </Row>

                                <Row className="RegisterRow BottomRightStatic">
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