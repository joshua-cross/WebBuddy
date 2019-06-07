import React from 'react';
import { addUserMessage } from '../../actions';
import { addMessage } from '../../actions';
import { connect } from 'react-redux';


class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    inputChanged = (event) => {
        this.setState({
            currentInput: event.target.value
        });
    }

    //when the user presses the enter button, submit what they said and wait for a user response.
    keyPressed = (event) => {
        console.log(event.keyCode)
        if(event.keyCode === 13) {
            console.log("User submitting data");

            //ensuring the user has acctually typed something before adding it as a response.
            if(this.state.currentInput !== '') {
                //adding the message a user action and a regular action
                this.props.addUserMessage(this.state.currentInput);
                this.props.addMessage(this.state.currentInput, 'user');
                this.props.userInputed(this.state.currentInput);
            }

            //resetting the keycode as it's no longer needed.
            this.setState({
                currentInput: ''
            })
        }
    }

    render() {
        return (
            <div>
                <input 
                    value = {this.state.currentInput}
                    type = "text"
                    placeholder = "Type Something"
                    className = "text-input"
                    onChange = {this.inputChanged}
                    onKeyDown = {this.keyPressed}
                />
            </div>
        )
    }
}

export default connect(null, {addUserMessage: addUserMessage, addMessage: addMessage})(TextInput);