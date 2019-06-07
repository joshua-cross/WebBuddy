import React from 'react';
import { connect } from 'react-redux';

class ResponseList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.props.messages)
    }

    //display Responses.
    renderItems = () => {
        return this.props.messages.map((response) => {
            return (<p>{response}</p>);
        });
    }

    render() {
        return (
            <div>{this.renderItems()}</div>
        )
    }
}

const mapStateToProps = (state, currentProps) => {
    console.log(state);
    return { messages: state.userMessages }
}

export default connect(mapStateToProps)(ResponseList);