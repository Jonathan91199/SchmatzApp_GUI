import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import AllChatsHeader from './Components/AllChatsHeader/AllChatsHeader'
import ChatSerachBar from './Components/ChatSearchBar/ChatSerachBar'
import AllChats from './Components/AllChats/AllChats'
import './AllChagtsColumnsStyle.css'

class AllChatsColumn extends Component{

    render(){
        return(
            <Col className="AllChatsColumnMainCol">
                <AllChatsHeader />
                <ChatSerachBar/>
                <AllChats/>
            </Col>

            
        )
    }
}

export default AllChatsColumn