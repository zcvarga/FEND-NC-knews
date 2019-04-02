import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";


class SingleArticleView extends Component {
    state = {
        commentsOpened: false,
        comments: [],
        article: null
    }


    getArticle = id => {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`;
        axios.get(url).then(({ data: { article } }) => this.setState({ article: article }))
    }
    getComments(id) {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.get(url).then(({ data: { comments } }) => this.setState({ comments: comments }))
    }

    componentDidMount() {
        const { id } = this.props;
        this.getArticle(id);
        this.getComments(id);
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props;
        if (prevProps.id !== id) {
            this.getArticle(id);
            this.getComments(id);
        }

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

    render() {
        console.log(this.state.article)
        if (!this.state.article) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (<div id='single-article-container'>
            <div className='article-view'>
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.author}</p>
                <p>{this.state.article.topic}</p>
                <p>{this.state.article.body}</p>
                <p>Comments: {this.state.article.comment_count}</p>
                <p>Created at: {this.state.article.created_at}</p>
                {!this.state.commentsOpened ? <button onClick={() => this.openComments()}>Open comments</button> : <button onClick={() => this.closeComments()}>Close comments</button>}
                {!this.state.commentsOpened ? <div></div> : <div>{this.state.comments.map(comment => {
                    return (<div key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
                        <p>{comment.votes}</p>
                    </div>)
                })}</div>}
            </div></div>)
    }


}

export default SingleArticleView;


// import PropTypes from 'prop-types';
// singleBookViewPropTypers