import React from 'react';
import VoiceButton from './input/voice/voiceInputButton';
import VoiceInputButton from './input/voice/voiceInputButton';
import Navigation from './header/navigation'; 
import TextInput from './input/text/textInput'
import Response from './chat/response';
import UserResponse from './userResponse';
import Robot from './robot/robot';

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

        //if the AI has replied the same amount of times as the user then everything is correct,
        //else something has gone wrong so display an error message.
        if(this.state.ai.length === this.state.responses.length) {
            for(let i = 0; i < this.state.responses.length; i++) {
                //adding the responses from the user.
                toDisplay.push(
                    <Response 
                    right = {false}
                    user = "You"
                    message = {this.state.responses[i]}
                    />
                );

                //adding the responses from the AI.
                toDisplay.push(
                    <Response
                    right = {true}
                    user = "WebBuddy"
                    message = {this.state.ai[i]}
                    />
                );
            }
        } else {
            toDisplay.push(<p>Sorry, the AI was unable to process one of your commands, we will fix this soon</p>)
        }
        return toDisplay;
    }




    //when the user talks to WebBuddy, add an item to the responses.
    userInputed = (userInput) => {
        var currResponses = this.state.responses;
        //the current responses by the ai.
        var currentAIResponses = this.state.ai;
        currResponses.push(userInput);

        var userResponse = new UserResponse(userInput);
        var aiResponse = userResponse.containsKeyWords();
        currentAIResponses.push(aiResponse);

        this.setState({
            responses: currResponses,
            ai: currentAIResponses
        });
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className = "main content">
                    <Robot></Robot>
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

