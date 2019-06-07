import React from 'react';
import { connect } from 'react-redux';
import Response from './response';

class ResponseList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.props.messages)
    }

    //display Responses.
    renderUserMessages = () => {
        return this.props.userMessages.map((response) => {
            return (<p>{response}</p>);
        });
    }

    renderAiMessages = () => {
        return this.props.aiMessages.map((response) => {
            return (
                <p>{response}</p>
            );
        });
    }

    renderMessages = () => {
        return this.props.messages.map((message) => {
            if(message.userType == 'user') {
                return (
                    <Response 
                        right = {false}
                        user = "You"
                        message = {message.message}
                    />
                );
            } else {
                return (
                    <Response
                        right = {true}
                        user = "WebBuddy"
                        message = {message.message}
                    />
                )
            }
        })
    }

    render() {
        return (
            <div>
                {this.renderMessages()}
            </div>
        )
    }
}

const mapStateToProps = (state, currentProps) => {
    console.log(state);
    //getting all the text from the store.
    return { 
        userMessages: state.userMessages,
        aiMessages: state.aiMessages,
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ResponseList);