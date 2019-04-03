import React, { Component } from 'react';
import axios from 'axios';
import ArticleInTopic from './ArticleInTopic';

class SingleTopicView extends Component {
    state = {
        articles: null
    }
    getArticlesByTopic = () => {
        const url = `https://dry-island-66406.herokuapp.com/api/articles?sort_by=${this.props.sort_by}`;
        axios.get(url).then(({ data: { articles } }) => this.setState({ articles: articles }))
    }

    componentDidMount() {
        console.log('here')
        this.getArticlesByTopic();
    }

    componentDidUpdate(prevProps) {
        const { slug, sort_by } = this.props;

        if (prevProps.slug !== slug || prevProps.sort_by !== sort_by) {
            console.log('rerendering')
            this.getArticlesByTopic();
        }

    }

    render() {
        console.log(this.props.sort_by)
        const { slug } = this.props;
        if (!this.state.articles) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (<ul className='flex-container-4' >
            {
                this.state.articles.filter(article => article.topic === slug).map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
                    return <ArticleInTopic article_id={article_id} author={author} title={title} topic={topic} votes={votes} comment_count={comment_count} created_at={created_at} />

                })
            }
        </ul >)
    }


}

export default SingleTopicView;