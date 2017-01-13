import React from 'react';
import firebase from 'firebase';

class CommentsItem extends React.Component {    
	render () {
		return (
			<li className="comments-item">
                <h3>
                    {this.props.author}
                    <a href="#" onClick={this.props.remove.bind(this, this.props.uid)}>delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>
		)
	}
}

export default CommentsItem;




