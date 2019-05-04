import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class CommentList extends Component {
    componentDidMount() {
        const { id } = this.props;
        this.props.getComments(id);
    }

    render() {
        console.log(this.props.comments);
        if (!this.props.comments) {
            return null;
        }

        return (<>
            <ul id='comments'>{this.props.comments.map(({ comment_id, body, author, created_at, votes }) => {
                return <Comment key={comment_id} comment_id={comment_id} body={body} author={author} created_at={created_at} votes={votes} deleteComment={this.deleteComment} />
            })}</ul></>)
    }
}

export default CommentList;
