import React, { Component } from 'react'
import chatImage from '../../../../../../../Assets/Pictures/WhatsAppDefaultImage.jpg'
import { Col, Row } from 'react-bootstrap'

import './Chat.css'

class Chat extends Component {

    render() {
        return (
            <div className="ChatMainDiv">
                <Col className="MessageMetaData">
                    <Row className="MessageRecieveTime">{this.props.time}</Row>
                    <Row  className="UnreadMessageCount"><div className="UnreadMessageCountInnerDiv" style={{display: this.props.unreadMessageCount === 0 ? "none" : "flex"}}>{this.props.unreadMessageCount}</div></Row>
                </Col>
                <Col className="ChatMessageCol">
                    <Row className="ChatName">{this.props.name}</Row>
                    <Row className="ChatContent">{this.props.message}</Row>
                </Col>
                <Col className="ChatImageCol"><img src={this.props.image} alt="" className="ChatImage"></img></Col>


            </div>
        )
    }
}
export default Chat