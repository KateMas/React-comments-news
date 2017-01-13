import React from 'react';
import NavLink from "./NavLink";

class PageNewsOne extends React.Component {
    constructor() {
        super();
        this.state = {
            newsList: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.params.newsId)
            .then((response) => response.json())
            .then((news) => {
                    this.setState({
                        newsList: news
                    });
                })
             .catch(alert);
    }
    render() {
        console.log(this.props.params);
        console.log(this.state.newsList);
        return (
            <div className="wrapper">
                <NavLink to="news" className="link-news">All news</NavLink>
                <div className="one-news">
                    <h2>{this.state.newsList.title}</h2>
                    <p>{this.state.newsList.body}</p>
                </div>
            </div>
        )
    }
}

export default PageNewsOne;