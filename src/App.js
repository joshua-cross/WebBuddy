import React from 'react';
import VoiceButton from './input/voice/voiceInputButton';
import VoiceInputButton from './input/voice/voiceInputButton';

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
                <VoiceInputButton />
            </div>
        );
    }
}

export default App;

