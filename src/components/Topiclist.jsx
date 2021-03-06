import React, { Component } from 'react';
import Topic from './Topic';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class Topiclist extends Component {
    constructor() {
        super();
        this.state = {
            formOpened: false,
            topicToAdd: {
                description: '',
                slug: ''
            }
        }
        this.addTopic = this.addTopic.bind(this);
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

    handleDescriptionChange(event) {
        this.setState({ topicToAdd: { decription: event.target.value, slug: this.state.topicToAdd.slug } })
    }
    handleSlugChange(event) {
        this.setState({ topicToAdd: { description: this.state.topicToAdd.description, slug: event.target.value } })
    }

    addTopic() {
        console.log(this.state);
        const url = 'https://dry-island-66406.herokuapp.com/api/topics';
        axios.post(url, this.state.topicToAdd).then(function (response) {
            if (response.data.topic) {
                console.log('reload page')
                this.props.getTopics();
            }
        });
        this.closeForm();
    }

    render() {
        const topicsToShow = this.props.topics.length ? this.props.topics.map(({ slug, description }) => {
            return <Topic key={slug} slug={slug} description={description} />
        }) : <h1>No articles found</h1>
        return (<div >
            <h2 className='topic-header'>
                {
                    !this.state.formOpened ? <Button variant="outlined" onClick={() => this.openForm()}>NEW TOPIC</Button> : <>
                        <input type="text" placeholder="Topic description" onChange={(event) => this.handleDescriptionChange(event)}></input>
                        <input type="text" placeholder="Slug" onChange={(event) => this.handleSlugChange(event)}></input>
                        <Button variant="outlined" onClick={() => this.addTopic()}>SUBMIT</Button>
                        <Button variant="outlined" onClick={() => this.closeForm()}>DISCARD</Button>
                    </>
                }
            </h2>
            <ul className='flex-container-3'>
                {topicsToShow}

            </ul>
        </div >)
    }
}






export default Topiclist;