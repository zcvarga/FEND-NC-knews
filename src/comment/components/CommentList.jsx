import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class CommentList extends Component {

    render() {
        if (!this.props.comments || !this.props.comments[this.props.id]) {
            console.log(this.props.comments);
            return <p>No comments found</p>;
        }

        return (<>
            <ul id='comments'>{this.props.comments[this.props.id].map(({ comment_id, body, author, created_at, votes }) => {
                return <Comment key={comment_id} comment_id={comment_id} body={body} author={author} user={this.props.user} created_at={created_at} votes={votes} deleteComment={this.props.deleteComment} />
            })}</ul></>)
    }
}

export default CommentList;
