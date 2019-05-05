import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';
import Voter from '../../generic/containers/VoterContainer';
import CommentList from '../../comment/containers/CommentListContainer';
import AddComment from '../../comment/containers/AddCommentContainer';
import Button from '@material-ui/core/Button';


class SingleArticleView extends Component {
    constructor() {
        super();
        this.state = {
            commentsOpened: false,
            article: null,
            comments: []
        }
    }

    componentDidMount() {
        this.props.getArticle(this.props.id);
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
      const { id } = this.props;
        if (!this.props.article) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (<div id='single-article-container'>
            <div className='article-view'>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.author}</p>
                <p>{this.props.article.topic}</p>
                <p>{this.props.article.body}</p>
                <Voter votes={this.props.article.votes} id={this.props.id} type='articles' />
                <p>Comments: {this.state.comments.length || this.props.article.comment_count}</p>
                <p>Created at: {this.props.article.created_at}</p>
                {!this.state.commentsOpened ?
                    <Button variant="outlined" onClick={() => this.openComments()}>OPEN COMMENTS</Button> :
                    <Button variant="outlined" onClick={() => this.closeComments()}>CLOSE COMMENTS</Button>}
                {!this.state.commentsOpened ? <div></div> : <>
                    <AddComment id={this.props.id} getComments={this.getComments} user={this.props.user} />
                    <CommentList id={this.props.id} getComments={this.getComments} user={this.props.user} /> </>}
                <Link to='/articles'><Avatar>
                    <Delete onClick={() => this.props.deleteArticle(this.props.id)} className='delete' />
                </Avatar></Link>
            </div></div>)
    }


}

export default SingleArticleView;


// import PropTypes from 'prop-types';
// singleBookViewPropTypers
