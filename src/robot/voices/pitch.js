import './slider.css';
import React from 'react';

class Pitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pitch: 1
        };
    }
    
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    //when the pitch changes.
    pitchChanged = (event) => {
        var pitch = event.target.value;
        this.setState({
            pitch: pitch
        })
        this.props.changePitch(pitch);
    }

    render() {
        return (
            <div>
                <input 
                  onChange={this.pitchChanged}
                  type="range"
                  step="0.01"
                  name="pitch"
                  min="0"
                  max="2"
                  value={this.state.pitch}
                >
                </input>
                <label for="pitch">Pitch</label>
                {this.state.pitch}
            </div>
        );
    }
}

export default Pitch;