import React, { Component } from 'react'
import img from '../../../../../../Assets/Pictures/ChatsPictures/jonathan.PNG'
import status from '../../../../../../Assets/Pictures/statusPic.PNG'
import messages from '../../../../../../Assets/Pictures/massagesPic.PNG'
import options from '../../../../../../Assets/Pictures/optionsPic.PNG'

import './AllChatsHeaderStyle.css'

class AllChatsHeader extends Component {
    render() {
        return (
            <div className="AllChatsHeaderMainDiv">
                <div className="ChatOptionsDiv">
                    <img src={options} alt="" className="OptionsImage"></img>
                    <img src={messages} alt="" className="OptionsImage"></img>
                    <img src={status} alt="" className="OptionsImage"></img>
                </div>

                <img src={img} alt="" className="UserImage"></img>
            </div>
        )
    }
}
export default AllChatsHeader