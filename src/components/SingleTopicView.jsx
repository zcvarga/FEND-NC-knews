import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";

class SingleTopicView extends Component {
    state = {
        articles: null
    }
    getArticlesByTopic = () => {
        const url = 'https://dry-island-66406.herokuapp.com/api/articles';
        axios.get(url).then(({ data: { articles } }) => this.setState({ articles: articles }))
    }

    componentDidMount() {

        this.getArticlesByTopic();
    }

    componentDidUpdate(prevProps) {
        const { slug } = this.props;
        if (prevProps.slug !== slug) {
            this.getArticlesByTopic();
        }

    }

    render() {
        const { slug } = this.props;
        if (!this.state.articles) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (<ul>
            {this.state.articles.filter(article => article.topic === slug).map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
                return (<li key={article_id}>
                    <h3>Title: {title}</h3>
                    <p>Author: {author}</p>
                    <p>Topic: {topic}</p>
                    <p>Votes: {votes}</p>
                    <p>Comments: {comment_count}</p>
                    <Link className='link' to={`/articles/${article_id}`} >Read article</Link>
                </li>)

            })}
        </ul>)
    }


}

export default SingleTopicView;