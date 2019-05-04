import React, { Component } from 'react';
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import Voter from '../../generic/components/Voter';
import CommentList from '../../comment/containers/CommentListContainer';
import AddComment from '../../comment/components/AddComment';


class Article extends Component {
    state = {
        commentsOpened: false,
        votesUpdated: false,
        didDeleteorPost: false,
    }

    toggleComments() {
        this.setState({ commentsOpened: !this.state.commentsOpened })
    }

    render() {
        const { author, title, topic, id, votes, allComments, commentCount } = this.props;
        const comments = allComments ? allComments[id] : null;
        console.log(comments);
        return (

            <li key={id} className='flex-articles'>
                <h3>Title: {title}</h3>
                <p>Author: {author}</p>
                <p>Topic: {topic}</p>
                <Voter votes={votes} id={id} type='articles' />
                <p>Comments: {comments || commentCount}</p>
                <Button onClick={() => this.toggleComments()} variant="outlined">{this.state.commentsOpened ? 'CLOSE COMMENTS' : 'OPEN COMMENTS'}</Button>
                {this.state.commentsOpened ? <><AddComment id={id} />
                    <CommentList id={id} /> </> : null}
                <Link to={`/articles/${id}`}><Button variant="outlined">
                    READ ARTICLE
                </Button></Link>
            </li >)
    }
}


export default Article;
