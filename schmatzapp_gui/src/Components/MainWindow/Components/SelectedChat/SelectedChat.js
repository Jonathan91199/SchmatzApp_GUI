import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Message from './Components/Message/Message'
import MessageHeader from './Components/MessageHeader/MessageHeader'
import MessageFooter from './Components/MessageFooter/MessageFooter'
import './SelectedChat.css'

class SelectedChat extends Component {
    render() {
        return (
            <Col className="SelectedChatMainCol">
                <MessageHeader />
                <div className="SelectedChatDiv">
                    <Message messageType="incomming" message="מה אני אעשה" time="20:00"/>
                    <Message messageType="outcomming" message="אתה סגור על זה ?" time="20:01"/>
                    <Message messageType="outcomming" message="כי אני לא" time="20:01"/>
                    <Message messageType="incomming" message="כן האמת שכן " time="20:01"/>
                    <Message messageType="incomming" message="אתה רוצה שאני אביא את זה בראשון ?" time="20:01"/>
                    <Message messageType="outcomming" message="כן תודה" time="20:02"/>
                    <Message messageType="outcomming" message="התחלה טובה" time="20:02"/>
                    <Message messageType="incomming" message="חחחח כן" time="20:02"/>
                    <Message messageType="incomming" message="מה עם הבידוד?" time="20:02"/>
                    <Message messageType="outcomming" message="משעמם רצח אני באמת מחפש דברים לעשות" time="20:02"/>
                    <Message messageType="outcomming" message='אני עובד ולומד בו"ז' time="20:02"/>
                    <Message messageType="outcomming" message="וישן מלא" time="20:02"/>
                    <Message messageType="incomming" message="חחחחחח תהנה" time="20:05"/>
                    <Message messageType="incomming" message="זה יהיה לך חסר כשאתה תחזוק" time="20:05"/>
                    <Message messageType="incomming" message="*תחזור" time="20:05"/>
                    <Message messageType="outcomming" message="אני יודע" time="20:06"/>
                    <Message messageType="outcomming" message="מנסה למצות כמה שאפשר" time="20:06"/>
                    <Message messageType="incomming" message="חחחחח" time="20:07"/>
                </div>
                <MessageFooter/>
            </Col>
        )
    }
}
export default SelectedChat