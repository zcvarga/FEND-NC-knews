import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class NewArticle extends Component {
    state = {
        articleToAdd: {
            title: '',
            body: '',
            topic: '',
            author: '',
        }
    }
    handleTitleChange(event) {
        this.setState({ articleToAdd: { title: event.target.value, body: this.state.articleToAdd.body, topic: this.state.articleToAdd.topic, author: this.state.articleToAdd.author } })
    }
    handleBodyChange(event) {
        this.setState({ articleToAdd: { title: this.state.articleToAdd.title, body: event.target.value, topic: this.state.articleToAdd.topic, author: this.state.articleToAdd.author } })
    }
    handleTopicChange(event) {
        this.setState({ articleToAdd: { title: this.state.articleToAdd.title, body: this.state.articleToAdd.body, topic: event.target.value, author: this.state.articleToAdd.author } })
    }
    handleAuthorChange(event) {
        this.setState({ articleToAdd: { title: this.state.articleToAdd.title, body: this.state.articleToAdd.body, topic: this.state.articleToAdd.topic, author: event.target.value } })
    }

    postArticle() {
        this.props.postArticle(this.state.articleToAdd);
    }

    render() {
        return (<div>
            <input type="text" placeholder='Title' onChange={(event) => this.handleTitleChange(event)}></input>
            <input type="text" placeholder='Author' onChange={(event) => this.handleAuthorChange(event)}></input>
            <input type="text" placeholder='Topic' onChange={(event) => this.handleTopicChange(event)}></input>
            <input type="text" placeholder='Body' onChange={(event) => this.handleBodyChange(event)}></input>

            <Button id='submit' variant="outlined" onClick={() => this.postArticle()}> SUBMIT </Button>
            {/* <button className='flexitem' onClick={() => this.closeForm()}>Discard</button> */}
        </div>)
    }
}

export default NewArticle;