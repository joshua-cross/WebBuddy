import React from 'react';

class SelectVoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            voice: 10,
            names: []
        };
    }

    componentDidMount() {
        var voices = window.speechSynthesis.getVoices();
        console.log(voices);
        setTimeout(() => {
            var voices = speechSynthesis.getVoices();
            console.log(voices);

            var names = [];
            for(let i = 0; i < voices.length; i++) {
                names.push(voices[i].name);
            }

            this.setState({
                names: names
            })
        }, 200);
    }

    componentDidUpdate() {

    }

    //when the user has changed the AI's voice.
    voiceChanged = (event) => {
        var voice = event.target.value;
        console.log(`the voice is ${voice}`);

        //setting the voice of the application.
        this.props.changeVoice(voice);
        //this.props.speak("Testing");
    }

    //getting the list of names from the speech API. 
    getNames = () => {
        var toDisplay = [];

        for(let i = 0; i < this.state.names.length; i++) {
            toDisplay.push(<option value = {i}>{this.state.names[i]}</option>);
        }

        return <select onChange = {this.voiceChanged}>{toDisplay}</select>;
    }

    render() {
        return (
            <div>
                {this.getNames()}
            </div>
        );
    }
}

export default SelectVoice;