import React from 'react';
import Article from '../containers/ArticleContainer';
import Trending from '../../generic/components/Trending';
import Stuff from '../../generic/components/Stuff';


const ArticleList = (props) => {
    if (!props.articles) {
        return (<p>Loading...</p>);
    }
    console.log(props.articles);
    return (<div className='flex-container-2'>
        <Trending />
        <ul className='flex-container-2-2'>
            {props.articles.map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
                return <Article key={article_id} author={author} title={title} topic={topic} id={article_id} votes={votes} comments={props.comments ? props.comments[article_id] : null} commentCount={comment_count} />
            })}
        </ul>
        <Stuff />
    </div >)

}

export default ArticleList;
