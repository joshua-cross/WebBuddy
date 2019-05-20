import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <input 
                    type = "text"
                    placeholder = "Type Something"
                    className = "text-input"
                />
            </div>
        )
    }
}

export default TextInput;