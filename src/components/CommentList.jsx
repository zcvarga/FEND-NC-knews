import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';
// import Button from '@material-ui/core/Button';

class Commentlist extends Component {

    state = {
        comments: [],

    }

    // openForm() {
    //     this.setState({
    //         formOpened: true
    //     })
    // }

    // closeForm() {
    //     this.setState({
    //         formOpened: false
    //     })
    // }

    getComments(id) {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.get(url).then(({ data: { comments } }) => this.setState({ comments: comments }))
    }

    deleteComment = (comment_id) => {
        const url = `https://dry-island-66406.herokuapp.com/api/comments/${comment_id}`;
        let self = this;
        const newComments = this.state.comments.filter(comment => comment.comment_id !== comment_id)
        axios.delete(url)
            .then((response) => {
                if (response.status === 204)
                    console.log('successfully deleted')
                self.setState({ comments: newComments })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        const { id } = this.props;

        if (this.props.update !== prevProps.update) {
            this.getComments(id);
        }
    }

    // handleUsernameChange(event) {
    //     this.setState({ commentToAdd: { username: event.target.value, body: this.state.commentToAdd.body } })
    // }
    // handleBodyChange(event) {
    //     this.setState({ commentToAdd: { usernamename: this.state.commentToAdd.username, body: event.target.value } })
    // }

    // addComment() {
    //     const { id } = this.props;
    //     const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
    //     const self = this;
    //     axios.post(url, this.state.commentToAdd).then(function (response) {
    //         if (response.data.comment) {
    //             console.log('reload page')
    //             self.props.getComments(id);
    //         }
    //     });
    //     this.closeForm();
    // }

    // 

    componentDidMount() {
        const { id } = this.props;
        this.getComments(id);
    }
    // componentDidUpdate(prevProps, prevState) { //delete one comment instead from state
    //     const { id } = this.props;
    //     if (this.state.comments.length !== prevState.comments.length) {
    //         this.getComments(id);
    //     }
    // }



    render() {
        console.log(this.state.comments)
        console.log('state', this.state)
        return (<>
            {/* <h5 >
                {
                    !this.state.formOpened ? <Button variant="outlined" onClick={() => this.openForm()}>NEW COMMENT</Button> : <>
                        <input type="text" placeholder="Type your comment" onChange={(event) => this.handleBodyChange(event)}></input>
                        <input type="text" placeholder="Username" onChange={(event) => this.handleUsernameChange(event)}></input>
                        <Button variant="outlined" onClick={() => this.addComment()}>SUBMIT</Button>
                        <Button variant="outlined" onClick={() => this.closeForm()}>DISCARD</Button>
                    </>
                }
            </h5> */}


            <ul id='comments'>{this.state.comments.map(({ comment_id, body, author, created_at, votes }) => {
                return <Comment comment_id={comment_id} body={body} author={author} created_at={created_at} votes={votes} deleteComment={this.deleteComment} />
            })}</ul></>)

    }
}

export default Commentlist;