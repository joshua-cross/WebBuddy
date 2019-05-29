import React from 'react';

class SelectVoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            voice: 10
        };
    }

    componentDidMount() {

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

    render() {
        return (
        <select onChange = {this.voiceChanged}> 
            <option value = "0"/>
            <option value = "1">James</option>
            <option value = "2">James</option>
            <option value = "3">James</option>
            <option value = "4">James</option>
            <option value = "5">James</option>
            <option value = "6">James</option>
            <option value = "7">James</option>
            <option value = "8">James</option>
            <option value = "9">James</option>
            <option value = "10">James</option>
        </select>
        );
    }
}

export default SelectVoice;