import React, { Component } from 'react'

class MessageArrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svg: <svg></svg>,
            spanStyle: {}
        }

    }
    componentDidMount() {
        this.setState(this.props.messageType === "incomming" ?

            {
                svg: <svg className="MessageArrowSvg" viewBox="0 0 8 13" width="8" height="13">
                    <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                    <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>,
                spanStyle: { right: "433px", color: "#fff" }
            } :
            {
                svg: <svg className="MessageArrowSvg" viewBox="0 0 8 13" width="8" height="13">
                    <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                    <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
                </svg>,
                spanStyle: { left: "2px", color: "#dcf8c6" }

            }

        )
    }
    render() {
        return (
            <span className="MessageArrowSpan" style={this.state.spanStyle}>
                {this.state.svg}
            </span>
        )
    }
}
export default MessageArrow