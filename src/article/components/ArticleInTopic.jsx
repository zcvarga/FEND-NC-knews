import React, { Component } from 'react';
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import Commentlist from '../../comment/components/CommentList';
import Voter from '../../generic/components/Voter';
import AddComment from '../../comment/components/AddComment';

class ArticleInTopic extends Component {
    state = {
        commentsOpened: false,
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

    render() {
        const { article_id, author, title, topic, votes, comment_count, created_at } = this.props;
        return (<li className='flex-articles' key={article_id}>
            <h3>Title: {title}</h3>
            <p>{created_at}</p>
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <Voter votes={votes} id={article_id} type='articles' />
            <p>Comments: {comment_count}</p>
            {!this.state.commentsOpened ?
                <Button onClick={() => this.openComments()} variant="outlined">OPEN COMMENTS</Button>
                :
                <Button onClick={() => this.closeComments()} variant="outlined"> CLOSE COMMENTS</Button>}
            {!this.state.commentsOpened ? <div></div> :
                <><AddComment id={this.props.article_id} />
                    <Commentlist id={this.props.article_id} /> </>}
            <Link className='link' to={`/articles/${article_id}`} >
                <Button variant="outlined" >READ ARTICLE</Button>
            </Link>
        </li>)
    }
}

export default ArticleInTopic;
