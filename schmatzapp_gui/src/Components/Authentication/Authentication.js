import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainWindow from '../MainWindow/MainWindow'
import LogInPage from '../LogInPage/LogInPage'

class Authentication extends Component{
    
    render(){
        return this.props.isUserLoggedIn ? <MainWindow/> : <LogInPage/>
    }
}
export default connect(store => store)(Authentication)