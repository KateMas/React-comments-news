import React from 'react';
import CommentsItem from './CommentsItem';
import CommentsCounter from './CommentsCounter';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class CommentsDisplay extends React.Component {
    constructor() {
        super();

        this._toggleComments = this._toggleComments.bind(this);

        this.state = {
            isShowComments: true,
            comments: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('comments'), "comments");
    }

    _toggleComments() {
        console.log(this);
        this.setState ({
            isShowComments: !this.state.isShowComments
        });
    }

    _removeComment(uid, event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            firebase.database().ref().child('comments').child(uid).remove();
        }
    }

    render () {
        console.log(this.state);
        const commentsList = this.state.comments;
        const commentsLength = commentsList.length;

        let commentsListNew;
        let commentsButton;
        let commentsTitle;
        if (commentsLength) {
            if(this.state.isShowComments) {
                commentsListNew = <ul className="comments-list">
                   {
                        commentsList.map((item,i) =>
                            <CommentsItem key={i} remove={this._removeComment} uid={item['.key']} author={item.name} text={item.comment} />)
                   }
                </ul>
            }
            commentsButton = <button className="button" onClick={this._toggleComments}>{this.state.isShowComments ? 'hide' : 'show'} comments</button>
        }

        return (
            <div className="comments-body">
                <CommentsCounter counter={commentsLength} />
                {commentsButton}
                {commentsListNew}
            </div>
        )
    }
}

ReactMixin(CommentsDisplay.prototype, ReactFire);

export default CommentsDisplay;