import React, { Component } from 'react';
import axios from 'axios';
import Commentlist from './CommentList';
import Button from '@material-ui/core/Button';


class AddComment extends Component {
    state = {
        formOpened: false,
        commentToAdd: {
            username: '',
            body: ''
        },
        childShouldUpdate: false
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

    handleUsernameChange(event) {
        this.setState({ commentToAdd: { username: event.target.value, body: this.state.commentToAdd.body } })
    }
    handleBodyChange(event) {
        this.setState({ commentToAdd: { usernamename: this.state.commentToAdd.username, body: event.target.value } })
    }

    addComment = () => {
        const { id } = this.props;
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        const self = this;
        axios.post(url, this.state.commentToAdd).then(function (response) {
            if (response.data.comment) {
                console.log('reload page')
                // self.props.getComments(id);
                self.setState({ childShouldUpdate: true })
            }
        });
        this.closeForm();
    }


    render() {
        console.log(this.props.id)
        return (<>
            <h5 >
                {
                    !this.state.formOpened ? <Button variant="outlined" onClick={() => this.openForm()}>NEW COMMENT</Button> : <>
                        <input type="text" placeholder="Type your comment" onChange={(event) => this.handleBodyChange(event)}></input>
                        <input type="text" placeholder="Username" onChange={(event) => this.handleUsernameChange(event)}></input>
                        <Button variant="outlined" onClick={() => this.addComment()}>SUBMIT</Button>
                        <Button variant="outlined" onClick={() => this.closeForm()}>DISCARD</Button>
                        <Commentlist id={this.props.id} update={this.childShouldUpdate} />
                    </>
                }
            </h5>
        </>)
    }
}

export default AddComment;