import React, { Component } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Voter from './Voter';
import Commentlist from './CommentList';
import AddComment from './AddComment';


class Article extends Component {
    state = {
        commentsOpened: false,
        votesUpdated: false
    }
    // setVotes() {
    //     this.setState({ votesUpdated: true })
    // }

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

    // updateVotes(value) {
    //     const { id } = this.props;

    // }
    // componentDidMount() {
    //     const { id } = this.props;
    //     this.getComments(id);
    // }

    render() {
        // console.log(this.state.comments)
        // console.log(this.state.commentsOpened)
        const { author, title, topic, id, votes, comments } = this.props;
        return (

            <li key={id} className='flex-articles'>
                <h3>Title: {title}</h3>
                <p>Author: {author}</p>
                <p>Topic: {topic}</p>
                {/* <p>Votes: {votes}</p> */}
                <Voter votes={votes} id={id} type='articles' />
                <p>Comments: {comments}</p>

                {!this.state.commentsOpened ? <button onClick={() => this.openComments()} >Open comments</button> : <button onClick={() => this.closeComments()} >Close comments</button>}
                {!this.state.commentsOpened ? <div></div> : <Commentlist id={id} />}

                <Link to={`/articles/${id}`}><Button variant="outlined" >
                    READ ARTICLE
                </Button></Link>

                <AddComment id={id} />


            </li >)
    }
}


export default Article;