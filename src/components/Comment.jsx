import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import Voter from './Voter';
import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';

class Comment extends Component {
    // state = {
    //     cat: 'Felix'
    // }

    clickDelete = () => {
        const { comment_id, deleteComment } = this.props;
        deleteComment(comment_id)
    }

    render() {
        const { comment_id, body, author, created_at, votes, deleteComment } = this.props;
        console.log('from comment', comment_id)
        return (<li key={comment_id}>
            <p>{body}</p>
            <p>{author}</p>
            <p>{created_at}</p>
            {/* <p>{votes}</p> */}
            <Voter votes={votes} id={comment_id} type='comments' />

            <Avatar>
                <Delete onClick={this.clickDelete} />
            </Avatar>
            {/* <Link to='/articles'></Link> */}
        </li>)
    }
}

export default Comment;