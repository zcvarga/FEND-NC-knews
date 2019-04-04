import React, { Component } from 'react';
import Voter from '../../generic/components/Voter';
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';

class Comment extends Component {

    clickDelete = () => {
        const { comment_id, deleteComment } = this.props;
        deleteComment(comment_id)
    }

    render() {
        const { comment_id, body, author, created_at, votes } = this.props;
        return (<li key={comment_id}>
            <p>{body}</p>
            <p>{author}</p>
            <p>{created_at}</p>
            <Voter votes={votes} id={comment_id} type='comments' />

            <Avatar>
                <Delete onClick={this.clickDelete} />
            </Avatar>
        </li>)
    }
}

export default Comment;