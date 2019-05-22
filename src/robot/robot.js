import React from 'react';

class Robot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className = "head">
                <div className = "eye eye-left">
                    <div className = "iris">
                    </div>
                </div>
                <div className = "eye eye-right">
                    <div className = "iris">
                    </div>
                </div>

                <div className = "nose">
                </div>

                <div className = "mouth-open">
                </div>
            </div>
        );
    }
}

export default Robot;