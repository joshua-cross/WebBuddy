import React from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

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

    render() {
        return (
            <div className = "voice-input">
                <button
                    className = "main-button"
                    onClick = {this.voiceInput}
                ><span><i className="fas fa-microphone"></i></span>
                Voice Command</button>
                <p>{this.state.result}</p>
                <p>{this.state.testResults}</p>
            </div>
        );
    }
}

export default VoiceInputButton;