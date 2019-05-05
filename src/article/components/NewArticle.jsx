import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';

class NewArticle extends Component {
    state = {
        articleToAdd: {
            title: '',
            body: '',
            topic: (this.props.topics && this.props.topics[0]) ? this.props.topics[0].slug : '',
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

    addArticle() {
        if (!this.props.user) {
            window.alert('You are not logged in');
            return;
        }
        this.props.postArticle(this.state.articleToAdd);
    }

    render() {
        console.log(this.props);
        return (<div>
            <input type="text" placeholder='Title' onChange={(event) => this.handleTitleChange(event)}></input>
            <input type="text" placeholder={this.props.user ? this.props.user.username : 'Please log in'} disabled={true}></input>
            <select placeholder='Topic' onChange={(event) => this.handleTopicChange(event)}>
                {this.props.topics && this.props.topics.map(topic => <option value={topic.slug}>{topic.description}</option>)}
            </select>
            <input type="text" placeholder='Body' onChange={(event) => this.handleBodyChange(event)}></input>

            <Button id='submit' variant="outlined" onClick={() => this.addArticle()}> SUBMIT </Button>
            {/* <button className='flexitem' onClick={() => this.closeForm()}>Discard</button> */}
        </div>)
    }
}

export default NewArticle;
