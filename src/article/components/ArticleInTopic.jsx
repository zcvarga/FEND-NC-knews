import React, { Component } from 'react';
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import CommentList from '../../comment/components/CommentList';
import AddComment from '../../comment/containers/AddCommentContainer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Voter from '../../generic/containers/VoterContainer';
import axios from 'axios';

class ArticleInTopic extends Component {
    constructor() {
        super();
        this.state = {
            commentsOpened: false,
            comments: [],
            open: false,
            scroll: 'paper',
        }
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount() {
      this.props.getComments(this.props.id);
    }


    openComments() {
        this.setState({
            commentsOpened: true
        })
    }

    closeComments() {
        this.setState({
            commentsOpened: false
        });
    }

    getComments(id) {
        this.props.getComments(id);
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { article_id, author, title, topic, votes, comment_count, created_at } = this.props;
        return (<li className='grid-container' key={article_id}>
            <h3 className='main'> {title}</h3>
            <p className='header'>Posted by: {author}</p>
            <p className='topic'>nc-knews/{topic}</p>
            <Voter votes={votes} id={this.props.article_id} type='articles' user={this.props.user} />
            {!this.state.commentsOpened ?
                <Button className='comments' variant="outlined" onClick={this.handleClickOpen('body')}>{comment_count} COMMENT(S)</Button> :
                <Button variant="outlined" onClick={() => this.closeComments()}>CLOSE COMMENTS</Button>}
            {!this.state.commentsOpened ? <div></div> : <>
                <AddComment id={this.props.article_id} user={this.props.user} />
                <CommentList id={this.props.article_id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} /> </>}
            <Link className='link' to={`/articles/${article_id}`} className='read-article' >
                <Button variant="outlined" >READ ARTICLE</Button>
            </Link>
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">Comments for "{title}"</DialogTitle>
                    <DialogContent>
                        <AddComment id={this.props.article_id} getComments={this.getComments} user={this.props.user} />
                        <CommentList id={this.props.article_id} getComments={this.getComments} comments={this.state.comments} user={this.props.user} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} variant="outlined">
                            Close
                             </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </li>)
    }
}

export default ArticleInTopic;
