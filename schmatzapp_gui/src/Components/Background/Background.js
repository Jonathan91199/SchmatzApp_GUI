import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Background.css'

class BackGround extends Component {

    render() {
        return (
            <div className="BackGroundMainDiv">
                <div className="BackgroundHeader"></div>
                <div className="BackgroundMain"></div>
                {/* <div className="MainWindowMainDiv"></div> */}
            </div>
        )
    }
}
export default connect(store => store)(BackGround)