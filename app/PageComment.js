import React from 'react';
import CommentsDisplay from './CommentsDisplay';
import CommentsForm from './CommentsForm';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCk_k4rFf3pBsdTcLJE3xViLsQ_c8m8iXc",
    authDomain: "react-576ba.firebaseapp.com",
    databaseURL: "https://react-576ba.firebaseio.com",
    storageBucket: "react-576ba.appspot.com",
    messagingSenderId: "1080578237356"
};

firebase.initializeApp(config); 


class PageComment extends React.Component {
    render() {
        // const now = new Date();
        // const list = ['HTML', 'CSS', 'JS'];
        // return (
        //  <div>
        //   <div>Ololo</div>
        //   <div>Ololo</div>
        //  </div>
        //  <div>
        //      <p>{now.toTimeString()}</p>
        //      <ul>
        //          {list.map((item, i) => <li key={i}>{item}</li>)}
        //      </ul>
        //  </div>
        // );
        return (
            <div className="comments-box">
                <CommentsForm/>
                <CommentsDisplay/>
            </div>
        )
    }
}

export default PageComment;
