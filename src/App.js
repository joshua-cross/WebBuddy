import React from 'react';
import VoiceButton from './input/voice/voiceInputButton';
import VoiceInputButton from './input/voice/voiceInputButton';
import Navigation from './header/navigation'; 
import TextInput from './input/text/textInput'
import Response from './chat/response';
import UserResponse from './userResponse';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [],
            responses: [],
            ai: []
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    drawChat = () => {
        var right = false
        var toDisplay = [];
        for(let i = 0; i < this.state.responses.length; i++) {
            toDisplay.push(
                <Response 
                right = {right}
                user = "You"
                message = {this.state.responses[i]}
                />
            );
            right = !right;
        }

        return toDisplay;
    }




    //when the user talks to WebBuddy, add an item to the responses.
    userInputed = (userInput) => {
        var currResponses = this.state.responses;
        currResponses.push(userInput);

        var userResponse = new UserResponse(userInput);
        var aiResponse = userResponse.containsKeyWords();
        alert (aiResponse);

        this.setState({
            responses: currResponses
        });
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className = "main content">
                    <TextInput />
                    <VoiceInputButton
                        userInputed = {this.userInputed}
                    />
                    {this.drawChat()}
                </div>
            </div>
        );
    }
}

export default App;

