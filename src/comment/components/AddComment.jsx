import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class AddComment extends Component {
    constructor() {
        super();
        this.addComment = this.addComment.bind(this);
        // this.getComments = this.props.getComments.bind(this);
    }
    state = {
        formOpened: false,
        commentToAdd: {
            username: '',
            body: ''
        }
    }
    openForm() {
        this.setState({
            formOpened: true
        })
    }

    closeForm() {
        this.setState({
            formOpened: false
        })
    }

    handleBodyChange(event) {
        this.setState({ commentToAdd: { username: this.props.user, body: event.target.value } })
    }

    addComment = () => {
        if (!this.props.user) {
            window.alert('You are not logged in');
            return;
        }
        const { id } = this.props;
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.post(url, this.state.commentToAdd).then((response) => {
            if (response.data.comment) {
                console.log('reload page')
                this.props.getComments(id);
            }
        })
        this.props.setCommentCount(1)
        this.closeForm();
    }


    render() {
        console.log(this.props.user)
        return (<>
            <h5 >
                {
                    !this.state.formOpened ? <Button variant="outlined" onClick={() => this.openForm()}>NEW COMMENT</Button> : <>
                        <input type="text" placeholder="Type your comment" onChange={(event) => this.handleBodyChange(event)}></input>
                        <input type="text" placeholder={this.props.user} disabled={true}></input>
                        <Button variant="outlined" onClick={() => this.addComment()}>SUBMIT</Button>
                        <Button variant="outlined" onClick={() => this.closeForm()}>DISCARD</Button>
                    </>
                }
            </h5>
        </>)
    }
}

export default AddComment;
