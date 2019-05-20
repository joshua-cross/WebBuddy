import React from 'react';

class Navigation extends React.Component {
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
            <div className = "header">
                <div className = "main">
                    <div className = "header-holder">
                        <div>WebBuddy</div>
                        <div><i class="fas fa-bars"></i></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navigation;