import React, { Component } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';


class Article extends Component {
    state = {
        commentsOpened: false,
        comments: []
    }

    openComments() {
        this.setState({
            commentsOpened: true
        })
    }

    getComments(id) {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.get(url).then(({ data: { comments } }) => console.log(comments))
    }

    componentDidMount() {
        const { id } = this.props;
        this.getComments(id);
    }

    render() {
        const { author, title, topic, id, votes, comments } = this.props;
        return (

            <li key={id} className='flex-articles'>
                <h3>Title: {title}</h3>
                <p>Author: {author}</p>
                <p>Topic: {topic}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comments}</p>
                <button onClick={() => this.openComments()}>Comments</button>
                <Link className='link' to={`/articles/${id}`}>Read article</Link>

            </li >)
    }
}


export default Article;