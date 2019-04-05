import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { ThumbUp, TrainOutlined, TrendingUpTwoTone } from '@material-ui/icons'
import { ThumbDown } from '@material-ui/icons';

class Voter extends Component {
    state = {
        votes: 0,
        voted: false
    }

    componentDidMount() {
        this.setState({ votes: this.props.votes })
    }

    handleClick(value) {
        if (!this.props.user) {
            window.alert('You are not logged in');
            return;
        }

        if (this.state.voted) {
            window.alert('You have already voted');
            return;
        }
        // console.log('value:', value)
        if (value === 1) {
            this.setState({ voted: true })
            this.updateVotes(1);

        }
        if (value === -1) {
            this.setState({ voted: true })
            this.updateVotes(-1);
        }


    }


    updateVotes(value) {
        const { id, type } = this.props;
        let url = `https://dry-island-66406.herokuapp.com/api/${type}/${id}`

        if (type === 'articles') {
            axios.patch(url, { inc_votes: value })
                .then(({ data: { article } }) => {
                    this.setState({ votes: article.votes })
                })
        }
        if (type === 'comments') {
            axios.patch(url, { inc_votes: value })
                .then(({ data: { comment } }) =>
                    this.setState({ votes: comment.votes })
                )
        }

    }

    // componentDidUpdate(_, prevState) {

    // }
    render() {
        const { type } = this.props;
        // console.log('up', this.state.upvoted, 'down', this.state.downvoted, 'state: ', this.state.votes, 'props: ', this.props.votes)
        return (
            <div className={type === 'articles' ? 'votes' : 'comment-votes'}> <Avatar><ThumbUp onClick={() => this.handleClick(1)} /></Avatar >
                <p>{this.state.votes}</p>
                <Avatar><ThumbDown onClick={() => this.handleClick(-1)} /></Avatar></div>
        )

    }
}
//  

export default Voter;
