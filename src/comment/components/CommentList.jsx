import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class Commentlist extends Component {

    deleteComment = (comment_id) => {
        const url = `https://dry-island-66406.herokuapp.com/api/comments/${comment_id}`;
        let self = this;
        const newComments = this.state.comments.filter(comment => comment.comment_id !== comment_id)
        axios.delete(url)
            .then((response) => { //regular function
                if (response.status === 204)
                    console.log('successfully deleted')
                self.setState({ comments: newComments })
            })
    }


    componentDidMount() {
        const { id } = this.props;
        this.props.getComments(id);
    }

    componentDidUpdate(_, prevState) {
        const { id } = this.props;
        if (this.state.comments.length !== prevState.comments.length) {
            this.props.getComments(id);
        }
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

export default Commentlist;