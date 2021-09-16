import React, { Component } from 'react'
import Barazani from '../../../../../../Assets/Pictures/ChatsPictures/barazani.PNG'
import OptionIcon from '../../../../../../Assets/Pictures/optionsPic.PNG'
import SearchIcon from '@material-ui/icons/Search';

import './MessageHeader.css'

class MessageHeader extends Component {

    render() {
        return (
            <div className="MessageHeaderMainDiv">
                <div className="MesssageHeaderInfo">
                    <img className="MessageHeaderPicture" alt="" src={Barazani}></img>
                    ברזאני
                </div>
                <div>
                    <SearchIcon className="MessageHeaderSeachIcon" />
                    <img className="MessageHeaderOptionIcon" alt="" src={OptionIcon}></img>
                </div>
            </div>
        )
    }
}
export default MessageHeader