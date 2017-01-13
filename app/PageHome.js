import React from 'react';
import Popup from './Popup';

class PageHome extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isShowPopup: true
        }
    }
    toggle () {
        this.setState ({
            isShowPopup: !this.state.isShowPopup
        })
    }
    render() {
        console.log("home",this.state);
        return (
            <div className="wrapper">
                <h1 onClick={this.toggle.bind(this)}>Home page</h1>
                {
                    //<img src="http://placehold.it/600x300/00ff99" />
                }
                <p>Lorem</p>
                <Popup isShow={this.state.isShowPopup}/>
            </div>
        )
    }
}

export default PageHome;