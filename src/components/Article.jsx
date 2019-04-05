import React, { Component } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Voter from './Voter';
import Commentlist from './CommentList';
import AddComment from './AddComment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class Article extends Component {
    constructor() {
        super();
        this.state = {
            commentsOpened: false,
            votesUpdated: false,
            comments: [],
            open: false,
            scroll: 'paper',
        }
        this.getComments = this.getComments.bind(this);
    }

    openComments() {
        this.setState({
            commentsOpened: true
        })
    }
    closeComments() {
        this.setState({
            commentsOpened: false
        })
    }

    getComments(id) {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}/comments`;
        axios.get(url).then(({ data: { comments } }) => this.setState({ comments: comments }))
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { author, title, topic, id, votes, comments } = this.props;
        return (
            <li key={id} className='grid-container'>
                <h3 className='main' > {title}</h3>
                <p className='header' >Posted by: {author}</p>
                <p className='topic'>nc-knews/{topic}</p>
                {/* <p>Votes: {votes}</p> */}
                <Voter votes={votes} id={id} type='articles' user={this.props.user} />
                {/* <p className='comments'>Comments: {this.state.comments.length || comments}</p> */}

                {!this.state.commentsOpened ?
                    <Button className='comments' variant="outlined" onClick={this.handleClickOpen('body')}>{`${this.state.comments.length || comments} COMMENT(S)`}</Button> :
                    <Button className='comments' variant="outlined" onClick={() => this.closeComments()}>CLOSE COMMENTS</Button>}
                {/* {!this.state.commentsOpened ? <div></div> : <div className='comment-container'>
                    <AddComment id={id} getComments={this.getComments} user={this.props.user} />
                    <Commentlist id={id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} /> </div>} */}

                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        scroll={this.state.scroll}
                        aria-labelledby="scroll-dialog-title"
                    >
                        <DialogTitle id="scroll-dialog-title">Comments for "{title}"</DialogTitle>
                        <DialogContent>
                            <AddComment id={id} getComments={this.getComments} user={this.props.user} />
                            <Commentlist id={id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} variant="outlined">
                                Close
                             </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <Link to={`/articles/${id}`} className='read-article'><Button id='read-button' variant="outlined" >
                    READ ARTICLE
                </Button></Link>




            </li >)
    }
}


export default Article;