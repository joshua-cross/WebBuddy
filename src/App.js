import React from 'react';
import VoiceButton from './input/voice/voiceInputButton';
import VoiceInputButton from './input/voice/voiceInputButton';
import Navigation from './header/navigation'; 
import TextInput from './input/text/textInput'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            thing: ''
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className = "main content">
                    <TextInput />
                    <VoiceInputButton />
                </div>
            </div>
        );
    }
}

export default App;

