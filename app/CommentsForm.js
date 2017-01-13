import React from 'react';
import firebase from 'firebase';

class CommentsForm extends React.Component {
    _submitForm(event) {
        event.preventDefault();

        const author = this._author.value;
        const comment = this.refs.comment.value;

        if(!(author.length && comment.length)) {
            return;
        }

        const commentObj = {
            'name': author,
            'comment': comment
        };

        console.log(commentObj);
        // console.log(this._author.value);
        // console.log(this.refs.comment.value);

        firebase.database().ref().child('comments').push(commentObj).then(()=>{
            this._author.value = '';
            this.refs.comment.value = '';
        });

    }
	render () {
		return (
			<form className="comments-form" onSubmit={this._submitForm.bind(this)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={ (input) => this._author = input} name="name"/>
                <label htmlFor="text">Comment</label>
                <textarea name="text" ref="comment" id="text"></textarea>
                <input type="submit" value="post comment"/>
            </form>
		)
	}
}

export default CommentsForm;