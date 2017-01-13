import React from 'react';
import NavLink from "./NavLink";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Main extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink onlyActiveOnIndex={true} to="/">Home page</NavLink>
                    <NavLink to="comments">Comments</NavLink>
                    <NavLink to="news">News</NavLink>
                </nav>
                <ReactCSSTransitionGroup
                    transitionName="carousel"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {React.cloneElement(this.props.children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Main;