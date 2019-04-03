import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { ThumbUp } from '@material-ui/icons'
import { ThumbDown } from '@material-ui/icons';

class Voter extends Component {
    state = {
        votes: 0,
        upvoted: false,
        downvoted: false
    }

    handleClick(value) {
        console.log('value:', value)
        if (value === 1) {
            this.setState({ upvoted: !this.state.upvoted })
            this.updateVotes(value);

        }
        if (value === -1) {
            this.setState({ downvoted: !this.state.downvoted })
            this.updateVotes(value);
        }


    }


    updateVotes(value) {
        const { id, type } = this.props;
        const newVotes = this.props.votes + value;
        console.log('newVotes: ', newVotes)
        let url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`
        this.setState({ votes: newVotes })
        axios.patch(url, { inc_votes: value })
            .then(({ data: { article } }) => {
                this.setState({ votes: article.votes })
            })

    }

    // componentDidUpdate(_, prevState) {

    // }
    render() {
        console.log('up', this.state.upvoted, 'down', this.state.downvoted, 'state: ', this.state.votes, 'props: ', this.props.votes)
        return (
            <> <Avatar><ThumbUp onClick={() => this.handleClick(1)} /></Avatar >
                <p>{!this.state.upvoted && !this.state.downvoted ? this.props.votes : this.state.votes}</p>
                <Avatar><ThumbDown onClick={() => this.handleClick(-1)} /></Avatar></>
        )

    }
}
//  

export default Voter;
