import React from 'react';
import { connect } from 'react-redux';

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
            return (
                <p>{message.message}, {message.userType}</p>
            );
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
    return { 
        userMessages: state.userMessages,
        aiMessages: state.aiMessages,
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ResponseList);