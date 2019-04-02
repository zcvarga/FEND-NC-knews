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
        const { id } = this.props;
        this.getComments(id);
    }

    render() {
        console.log(this.state.comments)
        console.log(this.state.commentsOpened)
        const { author, title, topic, id, votes, comments } = this.props;
        return (

            <li key={id} className='flex-articles'>
                <h3>Title: {title}</h3>
                <p>Author: {author}</p>
                <p>Topic: {topic}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comments}</p>
                {!this.state.commentsOpened ? <button onClick={() => this.openComments()}>Open comments</button> : <button onClick={() => this.closeComments()}>Close comments</button>}
                {!this.state.commentsOpened ? <div></div> : <div>{this.state.comments.map(comment => {
                    return (<div key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
                        <p>{comment.votes}</p>
                    </div>)
                })}</div>}

                <Link className='link' to={`/articles/${id}`}>Read article</Link>

            </li >)
    }
}


export default Article;