import React, { Component } from 'react';
import Voter from '../../generic/containers/VoterContainer';
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';

class Comment extends Component {

    clickDelete = () => {
        if (!this.props.user) {
            window.alert('You are not logged in');
            return;
        }
        if (this.props.user !== this.props.author) {
            window.alert('Not permitted. You can delete your comments only');
            return;
        }
        const { comment_id, deleteComment } = this.props;
        deleteComment(comment_id)
    }

    render() {
        const { comment_id, body, author, created_at, votes, deleteComment } = this.props;
        console.log('from comment', comment_id)
        return (<li className='comment-grid-container' key={comment_id}>
            <p className='comment-body' >{body}</p>
            <p className='comment-header' >Posted by: {author} at {created_at.split('T')[0]}</p>
            {/* <p>{votes}</p> */}
            <Voter votes={votes} id={comment_id} type='comments' user={this.props.user} />

            <Avatar className='delete-comment'>
                <Delete onClick={this.clickDelete} />
            </Avatar>
        </li>)
    }
}

export default Comment;
