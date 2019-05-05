import React, { Component } from 'react';
import ArticleInTopic from '../../article/containers/ArticleInTopicContainer';

class SingleTopicView extends Component {

    render() {
        // console.log(this.props.sort_by)
        const { slug } = this.props;
        if (!this.props.articles) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (<ul className='flex-container-4' >
            {
                this.props.articles.filter(article => article.topic === slug).map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
                    return <ArticleInTopic article_id={article_id} author={author} title={title} topic={topic} votes={votes} comment_count={comment_count} created_at={created_at} user={this.props.user} />
                })
            }
        </ul >)
    }
}

export default SingleTopicView;
