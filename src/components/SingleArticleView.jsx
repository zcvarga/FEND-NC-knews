import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';
import Voter from './Voter';
import Commentlist from './CommentList';
import AddComment from './AddComment';
import Button from '@material-ui/core/Button';



class SingleArticleView extends Component {
    constructor() {
        super();
        this.state = {
            commentsOpened: false,
            article: null,
            comments: []
        }
        this.getComments = this.getComments.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
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

    deleteArticle() {
        console.log(this.props);
        if (!this.props.user) {
            window.alert('You are not logged in');
            return;
        }
        if (this.props.user !== this.state.article.author) {
            window.alert('Not permitted. You can delete only your articles');
            return;
        }
        const { id } = this.props;
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`;
        axios.delete(url)
            .then((response) => {
                if (response.status === 200)
                    console.log('successfully deleted')
                this.props.getArticles();
            })
    }

    // updateVotes(value) {
    //     const { id } = this.props;
    //     const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`;
    //     axios.patch(url, { inc_votes: value })
    // }

    render() {
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
                <Voter votes={this.state.article.votes} id={this.props.id} type='articles' />
                <p>Comments: {this.state.comments.length || this.state.article.comment_count}</p>
                <p>Created at: {this.state.article.created_at}</p>
                {!this.state.commentsOpened ?
                    <Button variant="outlined" onClick={() => this.openComments()}>OPEN COMMENTS</Button> :
                    <Button variant="outlined" onClick={() => this.closeComments()}>CLOSE COMMENTS</Button>}
                {!this.state.commentsOpened ? <div></div> : <>
                    <AddComment id={this.props.id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} />
                    <Commentlist id={this.props.id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} /> </>}
                <Link to='/articles'><Avatar>
                    <Delete onClick={() => this.deleteArticle()} className='delete' />
                </Avatar></Link>
            </div></div>)
    }


}

export default SingleArticleView;


// import PropTypes from 'prop-types';
// singleBookViewPropTypers