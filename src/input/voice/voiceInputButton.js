import React from 'react';

class VoiceInputButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <button
                className = "main-button"
            ><span><i className="fas fa-microphone"></i></span>
            Voice Command</button>
        );
    }
}

export default VoiceInputButton;