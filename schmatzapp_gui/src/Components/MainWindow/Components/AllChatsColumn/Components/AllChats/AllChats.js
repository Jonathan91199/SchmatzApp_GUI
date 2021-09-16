import React, { Component } from 'react'
import Chat from './Components/Chat'
import Haiom from '../../../../../../Assets/Pictures/ChatsPictures/Haiom.PNG'
import Michal from '../../../../../../Assets/Pictures/ChatsPictures/michal.PNG'
import Aviram from '../../../../../../Assets/Pictures/ChatsPictures/Aviram.PNG'
import Ido from '../../../../../../Assets/Pictures/ChatsPictures/ido.PNG'
import Matan from '../../../../../../Assets/Pictures/ChatsPictures/matan.PNG'
import Aba from '../../../../../../Assets/Pictures/ChatsPictures/aba.PNG'
import Karate from '../../../../../../Assets/Pictures/ChatsPictures/karate.PNG'
import Nasich from '../../../../../../Assets/Pictures/ChatsPictures/nasich.PNG'
import Paz from '../../../../../../Assets/Pictures/ChatsPictures/paz.PNG'
import Barazani from '../../../../../../Assets/Pictures/ChatsPictures/barazani.PNG'
import NoPicture from '../../../../../../Assets/Pictures/WhatsAppDefaultImage.jpg'

import './AllChats.css'

class AllChats extends Component {

    render() {
        return (
            <div className="AllChatsDiv">
                <Chat name="היום2" message="יונתן: אני לא למה אנחנו אלה שצריכים לעשות הכל" time="23:56" unreadMessageCount={4} image={Haiom} />
                <Chat name="מיכל" message="תברר" time="23:34" unreadMessageCount={2} image={Michal}/>
                <Chat name="אבירם" message="כן" time="22:01" unreadMessageCount={0} image={Aviram}/>
                <Chat name="אבא" message="תשלח את ההודעה מחר" time="21:55" unreadMessageCount={1} image={Aba}/>
                <Chat name="מתן 474" message="לא חחח..." time="21:36" unreadMessageCount={4} image={Matan}/>
                <Chat name="ברזאני" message="סגור" time="20:41" unreadMessageCount={0} image={Barazani}/>
                <Chat name="פז" message="אני חושב שאני אצליח" time="20:33" unreadMessageCount={7} image={Paz}/>
                <Chat name="עידו הדר" message="אני צריך להשתחרר" time="21:36" unreadMessageCount={0} image={Ido}/>
                <Chat name="קראטה בוגרים" message="נועם:אני מאחר" time="19:15" unreadMessageCount={12} image={Karate}/>
                <Chat name="צוות נסיכים" message="אמיני:זורם" time="19:14" unreadMessageCount={1} image={Nasich}/>
                <Chat name="ניהול וארגון" message="נטע: בפטרול" time="18:36" unreadMessageCount={0} image={NoPicture}/>
                <Chat name="היום2" message="יונתן: אני לא למה אנחנו אלה שצריכים לעשות הכל" time="23:56" unreadMessageCount={4} image={Haiom} />
                <Chat name="מיכל" message="תברר" time="23:34" unreadMessageCount={2} image={Michal}/>
                <Chat name="אבירם" message="כן" time="22:01" unreadMessageCount={0} image={Aviram}/>
                <Chat name="אבא" message="תשלח את ההודעה מחר" time="21:55" unreadMessageCount={1} image={Aba}/>
                <Chat name="מתן 474" message="לא חחח..." time="21:36" unreadMessageCount={4} image={Matan}/>
                <Chat name="ברזאני" message="סגור" time="20:41" unreadMessageCount={0} image={Barazani}/>
                <Chat name="פז" message="אני חושב שאני אצליח" time="20:33" unreadMessageCount={7} image={Paz}/>
                <Chat name="עידו הדר" message="אני צריך להשתחרר" time="21:36" unreadMessageCount={0} image={Ido}/>
                <Chat name="קראטה בוגרים" message="נועם:אני מאחר" time="19:15" unreadMessageCount={12} image={Karate}/>
                <Chat name="צוות נסיכים" message="אמיני:זורם" time="19:14" unreadMessageCount={1} image={Nasich}/>
                <Chat name="ניהול וארגון" message="נטע: בפטרול" time="18:36" unreadMessageCount={0} image={NoPicture}/><Chat name="היום2" message="יונתן: אני לא למה אנחנו אלה שצריכים לעשות הכל" time="23:56" unreadMessageCount={4} image={Haiom} />
                <Chat name="מיכל" message="תברר" time="23:34" unreadMessageCount={2} image={Michal}/>
                <Chat name="אבירם" message="כן" time="22:01" unreadMessageCount={0} image={Aviram}/>
                <Chat name="אבא" message="תשלח את ההודעה מחר" time="21:55" unreadMessageCount={1} image={Aba}/>
                <Chat name="מתן 474" message="לא חחח..." time="21:36" unreadMessageCount={4} image={Matan}/>
                <Chat name="ברזאני" message="סגור" time="20:41" unreadMessageCount={0} image={Barazani}/>
                <Chat name="פז" message="אני חושב שאני אצליח" time="20:33" unreadMessageCount={7} image={Paz}/>
                <Chat name="עידו הדר" message="אני צריך להשתחרר" time="21:36" unreadMessageCount={0} image={Ido}/>
                <Chat name="קראטה בוגרים" message="נועם:אני מאחר" time="19:15" unreadMessageCount={12} image={Karate}/>
                <Chat name="צוות נסיכים" message="אמיני:זורם" time="19:14" unreadMessageCount={1} image={Nasich}/>
                <Chat name="ניהול וארגון" message="נטע: בפטרול" time="18:36" unreadMessageCount={0} image={NoPicture}/>
            </div>

        )
    }
}
export default AllChats