import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logo from '../../Assets/Pictures/logo.png'
import { Button, Form, Row, Col } from 'react-bootstrap'
import LoginForms from './Dependencies/LogInForms'
import RegisterForms from './Dependencies/RegisterForms'
import formValidation from './Dependencies/formValidation'
import logIn from './Dependencies/logIn'


import './LoginPageStyle.css'

class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.state = { register: true }
    }
    handleRegisterClick() {
        this.setState({ register: !this.state.register })
    }
    handleLoginClick(){
        const USER_NAME = document.getElementById('userNameId').value
        const PASSWORD = document.getElementById('passwordId').value
        let isValid = formValidation([{formValue : USER_NAME, formId : 'userNameId'}, {formValue : PASSWORD, formId : 'passwordId'}])
        isValid && logIn(USER_NAME, PASSWORD, ()=>{

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
                            <LoginForms logInCallBack={this.handleLoginClick} registerCallBack={this.handleRegisterClick}/>
                            :
                           <RegisterForms registerCallBack={this.handleRegisterClick} />
                    }



                </div>
            </div>


        )
    }
}
export default connect(store => store)(LogInPage)