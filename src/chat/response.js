import React from 'react';
import { connect } from 'react-redux';

class Response extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            message: this.props.message,
            right: this.props.right,
            bubbleClass: 'left-bubble',
            arrowClass: 'left-arrow',
            paragraphClass: 'left'
        }
    }

    componentDidMount() {
        this.determineClass();
    }

    componentDidUpdate() {
        console.log(this.props.messages);
    }
    
    //changing the bubble and arrows class depending on what the applications decides.
    determineClass = () => {
        if(this.state.right) {
            this.setState({
                bubbleClass: 'right-bubble',
                arrowClass: 'right-arrow',
                paragraphClass: 'right'
            })
        } else {
            this.setState({
                bubbleClass: 'left-bubble',
                arrowClass: 'left-arrow',
                paragraphClass: 'left'
            });
        }
    }

    render() {
        return (
            <div className = "response">
                <div className = "response-holder">
                    <p className = {`${this.state.paragraphClass}`}>
                        <div className = {`speech-bubble ${this.state.bubbleClass}`}>
                            {this.state.user}
                        </div>
                        <br></br>
                        <div className = {`arrow-down ${this.state.arrowClass}`}></div>
                    </p>
                </div>
                <div className = {`message ${this.state.paragraphClass}`}>
                    {this.state.message}
                </div>
            </div>
        )
    }
}

Response.defaultProps = {
    user: 'default',
    message: 'No message was defined',
    right: false
}

const mapStateToProps = (state) => {
    console.log(state);
    return { messages: state.userMessages }
}

export default connect(mapStateToProps)(Response);