import React from 'react';

class Robot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouthOpen: false,
            class: "mouth"
        }
    }

    componentDidMount() {
        var that = this;

        setInterval(() => {
            var mClass;
            if(!that.state.mouthOpen === true) {
                mClass = "mouth-open";
            } else {
                mClass = "mouth";
            }
            that.setState({
                mouthOpen: !that.state.mouthOpen,
                class: mClass
            });
        }, 300);
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

                <div className = {`${this.state.class}`}>
                </div>
            </div>
        );
    }
}

export default Robot;