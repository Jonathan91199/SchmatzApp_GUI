import { Button, Form, Row, Col } from 'react-bootstrap'

export default function RegisterForms(props) {
    return (
        <Col className="Register">

            <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="User Name"></Form.Control></Row>
            <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Email Address"></Form.Control></Row>
            <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Password"></Form.Control></Row>
            <Row className="ParentCenterDiv RegisterFormParent"><Form.Control className="SignInForm" placeholder="Repeat Password"></Form.Control></Row>

            <Row className="RegisterRow">
                <div className="RegisterParentButton"><Button className="RegisterButton">Register Now !</Button></div>

            </Row>

            <Row className="RegisterRow BottomRightStatic">
                <div className="ParentCenterDiv SignInOption"><div className="RegisterOption" onClick={()=>props.registerCallBack()}>Sign In</div></div>
            </Row>

        </Col>
    )
}