import React from 'react';
import NavLink from "./NavLink";
import PageNewsOne from "./PageNewsOne";

class PageNews extends React.Component {
    constructor() {
        super();
        this.state = {
            newsList: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((news) => {
                    this.setState({
                        newsList: news
                    });
                })
             .catch(alert);
    }


    render() {
        console.log(this.state);
        let newsList = this.state.newsList;
        let allNews = newsList.map((item,i) => {
            return <div className="wrapper-news" id={item.id} key={item.id}>
                <h2>
                    <NavLink to={`/news/${item.id}`}>{item.title}</NavLink>
                </h2>
                <p>{item.body}</p>
            </div>
            })

        return (
            <div className="wrapper">
                <h1>News</h1>
                {allNews}
            </div>
        )
    }
}

export default PageNews;