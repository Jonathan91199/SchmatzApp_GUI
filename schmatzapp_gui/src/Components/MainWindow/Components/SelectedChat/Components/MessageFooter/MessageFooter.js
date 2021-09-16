import React, { Component } from 'react'
import { Form, Row } from 'react-bootstrap'
import MoodIcon from '@material-ui/icons/Mood';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import './MessageFooter.css'

class MessageFooter extends Component {

    render() {
        return (
            <div className="MessageFooterMainDiv">
                <Row className="ChatWriterRow">
                    <MoodIcon className="ChatWriterIcon" />
                    <AttachFileIcon className="ChatWriterIcon" />
                    <Form.Control className="ChatsFormControl" placeholder="הקלד/י הודעה"></Form.Control>
                    <MicIcon className="ChatWriterIcon"/>
                </Row>

            </div>
        )
    }
}
export default MessageFooter