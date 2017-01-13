import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPopup: this.props.isShow
        }
    }
    hide () {
        this.setState ({
            isShowPopup: false
        })
    }

    render() {
        console.log(this.state);
        let template;
        if (this.state.isShowPopup) {
            template = <div>
                <div onClick={this.hide.bind(this)}>Close</div>
                <p>Lorem</p>
            </div>
        }
        return (
            <div className="popup">
                {template}
            </div>
        )
    }
}

export default Popup;