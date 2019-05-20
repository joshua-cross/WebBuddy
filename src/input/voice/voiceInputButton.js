import React from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';
import { PassThrough } from 'stream';

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
}

class VoiceInputButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listening: false,
            result: '',
            testResults: ''
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps(nextProps) {

    }

    handleListen = () => {
    }

    //when the user presses the voice recognition button, figure out what they're saying
    voiceInput = (event) => {
        //setting if we are listening to the user or not.
        var listening = !this.state.listening;
        this.setState({
            listening: !this.state.listening
        })
        if(listening) {
            this.recognition = new window.webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = "en-US";
            this.recognition.start();
            this.recognition.onresult = event => {

                var final_transcript = '';
                var interim_transcript = '';

                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    } else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                }
                
                this.setState({
                    result: this.state.result + final_transcript
                })
            }
        }
    }

    stopInput = () => {
        //setting if we are listening to the user or not.
        var listening = !this.state.listening;
        this.setState({
            listening: !this.state.listening
        })
        this.recognition.abort();

        this.recognition.onspeechend = () => {
            this.recognition.stop();
            alert("Stopped Listening");
        }
    }


    //checkiong to see if we're listening or not, then using this to determine what button we want
    //to display.
    displayButton = () => {
        if(!this.state.listening) {
            return (
                <button
                    className = "main-button"
                    onClick = {this.voiceInput}
                ><span><i className="fas fa-microphone"></i></span>
                Voice Command</button>
            )
        } else {
            return(
                <button
                    className = "main-button"
                    onClick = {this.stopInput}
                ><span><i className="fas fa-microphone"></i></span>
                Stop Listening</button>
            );
        }
    }

    //function that returns the results of what the user has said.
    returnText = () => {
        if(this.state.result != '') {
            return <p className = "voice-results">"{this.state.result}"</p>;
        }
    }

    render() {
        return (
            <div className = "voice-input">
                {this.displayButton()}
                {this.returnText()}
                <p>{this.state.testResults}</p>
            </div>
        );
    }
}

export default VoiceInputButton;