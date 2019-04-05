import React from 'react';
import Article from './Article';
import Trending from './Trending';
import Stuff from './Stuff';


const Articlelist = (props) => {
    const articlesToShow = props.articles ? props.articles.map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
        return <Article key={article_id} author={author} title={title} topic={topic} id={article_id} votes={votes} comments={comment_count} getArticles={props.getArticles} user={props.user} />
    }) : <h1>No articles found</h1>
    return (<div className='flex-container-2'>
        <Trending />
        <ul className='flex-container-2-2'>
            {articlesToShow}

        </ul>
        <Stuff />
    </div >)

}

export default Articlelist;