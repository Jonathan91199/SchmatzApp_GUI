import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import MessageArrow from '../MessageArrow/MessageArrow'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import './Message.css'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MessageMainDivStyle: {},
            MessageMainRowStyle: {},
            MessageCheckIconStyle: {}
        }

    }
    componentDidMount() {
        this.setState(this.props.messageType === "incomming" ?
            {
                MessageMainDivStyle: "flex-end",
                MessageMainRowStyle: {background:"#fff", borderTopLeftRadius:"5px", borderTopRightRadius:"0"},
                MessageCheckIconStyle: "none"
            } :
            {
                MessageMainDivStyle: "flex-start",
                MessageMainRowStyle: {background:"#dcf8c6", borderTopLeftRadius:"0", borderTopRightRadius:"5px"},
                MessageCheckIconStyle: ""
            }

        )
    }
    render() {
        return (
            <div className="MessageMainDiv" style={{ justifyContent: this.state.MessageMainDivStyle }}>

                <Row className="MessageMainRow" style={ this.state.MessageMainRowStyle}>
                    <MessageArrow messageType={this.props.messageType} />
                    <Col className="MessageCheckIconCol"><DoneAllIcon className="MessageCheckIcon" style={{ display: this.state.MessageCheckIconStyle }} /></Col>
                    <Col className="MessageTime">{this.props.time}</Col>
                    <Col className="MessageContent">{this.props.message}</Col>
                </Row>
            </div>
        )
    }
}
export default Message