import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            formOpened: false,
            commentToAdd: {
                username: '',
                body: ''
            }
    }
  }

  componentDidMount() {
    this.setState({
      commentToAdd: {
        username: this.props.user ? this.props.user.username : '',
        body: ''
      }
    })
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
        this.setState({ commentToAdd: { username: this.props.user ? this.props.user.username : '', body: event.target.value } })
    }

    addComment = () => {
        this.props.postComment(this.props.id, this.state.commentToAdd)
        this.closeForm();
    }


    render() {
        console.log(this.props.user);
        return (<>
            <h5 >
                {
                    !this.state.formOpened ? <Button variant="outlined" onClick={() => this.openForm()}>NEW COMMENT</Button> : <>
                        <input type="text" placeholder="Type your comment" onChange={(event) => this.handleBodyChange(event)}></input>
                        <input type="text" placeholder={this.props.user ? this.props.user.username : ''} disabled={true}></input>
                        <Button variant="outlined" onClick={() => this.addComment()}>SUBMIT</Button>
                        <Button variant="outlined" onClick={() => this.closeForm()}>DISCARD</Button>
                    </>
                }
            </h5>
        </>)
    }
}

export default AddComment;
