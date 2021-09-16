import React, { Component } from 'react'
import './MainWinodwStyle.css'
import AllChatsColumn from './Components/AllChatsColumn/AllChatsColumn'
import SelectedChat from './Components/SelectedChat/SelectedChat'
import { Col, Row } from 'react-bootstrap'

class MainWindow extends Component {
    render() {
        return (

            <Row className="MainWindowMainDiv">

                <SelectedChat />
                <AllChatsColumn />
            </Row>

        )
    }
}
export default MainWindow