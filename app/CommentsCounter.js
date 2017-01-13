import React from 'react';

class CommentsCounter extends React.Component {
    _getCommentsTitle(countSm) {
        if (countSm === 0) {
            return 'No comments yet';
        } else if (countSm === 1) {
            return '1 comment';
        } else {
            return `${countSm} comments`;
        }
    }
	render () {
		return (
			<div className="comments-title">
                {this._getCommentsTitle(this.props.counter)}
            </div>
		)
	}
}

export default CommentsCounter;