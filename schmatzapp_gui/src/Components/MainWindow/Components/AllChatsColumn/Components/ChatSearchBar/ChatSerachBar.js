
import React, { Component } from 'react'
import { Form, Row } from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
import './ChatSerachBar.css'

class ChatSerachBar extends Component {
  
    render() {
        return (
            <div className="ChatsFormDiv">
                <Row className="ChatsFormRow">
                    <Form.Control className="ChatsFormControl" placeholder="חיפוש או התחלת צ'אט חדש"></Form.Control>
                    <SearchIcon className="ChatsSeachIcon" />
                </Row>

            </div>
        )
    }
}
export default ChatSerachBar
