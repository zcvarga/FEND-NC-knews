import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';
import Voter from '../../generic/components/Voter';
import Commentlist from '../../comment/components/CommentList';
import AddComment from '../../comment/components/AddComment';
import Button from '@material-ui/core/Button';


class SingleArticleView extends Component {
    state = {
        commentsOpened: false,
        article: null
    }


    getArticle = id => {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`;
        axios.get(url).then(({ data: { article } }) => this.setState({ article: article }))
    }

    componentDidMount() {
        const { id } = this.props;
        this.getArticle(id);
    }

    componentDidUpdate(prevProps, prevState) {
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
                <p>Comments: {this.state.article.comment_count}</p>
                <p>Created at: {this.state.article.created_at}</p>
                {!this.state.commentsOpened ?
                    <Button onClick={() => this.openComments()} variant="outlined">OPEN COMMENTS</Button>
                    :
                    <Button onClick={() => this.closeComments()} variant="outlined"> CLOSE COMMENTS</Button>}
                {!this.state.commentsOpened ? <div></div> :
                    <><AddComment id={this.props.id} setNewCommentCount={this.setNewCommentCount} />
                        <Commentlist id={this.props.id} /> </>}
                <Link to='/articles'><Avatar>
                    <Delete onClick={() => this.props.deleteArticle(this.props.id)} />
                </Avatar></Link>
            </div></div>)
    }


}

export default SingleArticleView;


// import PropTypes from 'prop-types';
// singleBookViewPropTypers