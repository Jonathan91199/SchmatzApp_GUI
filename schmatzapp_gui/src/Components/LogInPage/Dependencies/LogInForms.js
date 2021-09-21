import { Button, Form } from 'react-bootstrap'


export default function LoginForms(props) {
    return (
        <div>
            <div className="ParentCenterDiv LoginFormParent"><Form.Control className="LoginForm" id="userNameId" placeholder="User Name"></Form.Control></div>
            <div className="ParentCenterDiv LoginFormParent"><Form.Control type="password" className="LoginForm" id="passwordId" placeholder="Password"></Form.Control></div>
            <div className="LoginParentButton"><Button onClick={() => props.logInCallBack()} className="LoginButton">Login</Button></div>
            <div className="ParentCenterDiv SignInOption">Don't Have a User ? &nbsp;<div className="RegisterOption" onClick={() => props.registerCallBack()}>Register Now</div></div>
        </div>
    )
}