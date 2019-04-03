import React, { Component } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import Button from '@material-ui/core/Button';

class ArticleInTopic extends Component {
    state = {
        commentsOpened: false,
        comments: []
    }
    openComments() {
        this.setState({
            commentsOpened: true
        })
    }

    closeComments() {
        this.setState({
            commentsOpened: false
        })
    }
    getComments(id) {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.get(url).then(({ data: { comments } }) => this.setState({ comments: comments }))
    }

    componentDidMount() {
        const { article_id } = this.props;
        this.getComments(article_id);
    }

    render() {
        const { article_id, author, title, topic, votes, comment_count, created_at } = this.props;
        return (<li className='flex-articles' key={article_id}>
            <h3>Title: {title}</h3>
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <p>Votes: {votes}</p>
            <p>Comments: {comment_count}</p>
            {!this.state.commentsOpened ? <button onClick={() => this.openComments()}>Open comments</button> : <button onClick={() => this.closeComments()}>Close comments</button>}
            {!this.state.commentsOpened ? <div></div> : <div id='comments-topics'>{this.state.comments.map(comment => {
                return (<div key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                    <p>{comment.votes}</p>
                </div>)
            })}</div>}
            <Link className='link' to={`/articles/${article_id}`} >
                <Button variant="outlined" >READ ARTICLE</Button>
            </Link>
        </li>)
    }
}

export default ArticleInTopic;
