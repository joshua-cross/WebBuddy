import React from 'react';
import VoiceButton from './input/voice/voiceInputButton';
import VoiceInputButton from './input/voice/voiceInputButton';
import Navigation from './header/navigation'; 
import TextInput from './input/text/textInput'
import Response from './chat/response';
import UserResponse from './userResponse';
import Robot from './robot/robot';
import SelectVoice from './robot/voices/selectVoice';
import Pitch from './robot/voices/pitch';
import ResponseList from './chat/ResponseList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [],
            responses: [],
            ai: [],
            responding: false,
            voice: {
                person: 0,
                pitch: 1
            },
            voices: []
        };
    }

    componentDidMount() {
        this.hasDeclinedMic();
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
                    //message = {this.state.responses[i]}
                    />
                );

                //adding the responses from the AI.
                toDisplay.push(
                    <Response
                    right = {true}
                    user = "WebBuddy"
                    //message = {this.state.ai[i]}
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
            ai: currentAIResponses,
            responding: true,
        });

        //having the application speak the AI response.
        this.textToSpeech(aiResponse);
    }

    //function that performs text to speech on a given string.
    textToSpeech = (toSpeak, voice = this.state.voice.person, pitch = this.state.voice.pitch) => {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[voice]; // Note: some voices don't support altering params
        console.log("The voice is " + voice + " for some fucking reason");
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = pitch; //0 to 2
        msg.text = toSpeak;
        msg.lang = 'en-US';
        
        console.log(voices);

        var that = this;

        //when the AI stops speaking, have the robot stop animating.
        msg.onend = function(e) {
            console.log('Finished in ' + e.elapsedTime + ' seconds.');
            that.setState({
                responding: false
            })
        };

        speechSynthesis.speak(msg);
    }


    //checking if the user has declined microphone usage.
    hasDeclinedMic = () => {
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (navigator.getUserMedia){

            navigator.getUserMedia({audio:true}, 
                function(stream) {
                    console.log("Apparently, is's been accepted");
                },
                function(e) {
                    console.log('Error capturing audio.');
                }
            );
        } else { console.log("Not accepted in browser"); }
    }

    changeVoice = (voice) => {
        console.log("We are changing the voice to " + voice);
        //temporary object for the voice as it's about to change.
        var theVoice = {
            person: voice,
            pitch: this.state.voice.pitch
        };

        this.setState({
            voice: theVoice
        });

        //allowing the user to here the list of voices they have selected.
        this.textToSpeech("Testing", voice);
    }

    changePitch = (pitch) => {
        //temporary object for the voice as it's about to change.
        var voice = {
            person: this.state.voice.person,
            pitch: pitch
        };

        this.setState({
            voice: voice
        });

        //allowing the user to here the voice.
        this.textToSpeech("Testing", this.state.voice.person, pitch);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className = "main content">
                    <Robot
                        responding = {this.state.responding}
                    />
                    <SelectVoice
                        changeVoice = {this.changeVoice}
                        speak = {this.textToSpeech}
                    />
                    <Pitch
                        changePitch = {this.changePitch}
                    />
                    <p>The voice is {this.state.voice.toString()}</p>
                    <TextInput />
                    <VoiceInputButton
                        userInputed = {this.userInputed}
                    />
                    <ResponseList />
                </div>
            </div>
        );
    }
}

export default App;

