import React from 'react';
import Article from './Article';
import Trending from './Trending';


const Articlelist = (props) => {

    return (<div className='flex-container-2'>
        <Trending />
        <ul className='flex-container-2-2'>
            {props.articles.map(({ article_id, author, title, topic, votes, comment_count, created_at }) => {
                return <Article key={article_id} author={author} title={title} topic={topic} id={article_id} votes={votes} comments={comment_count} />
            })}

        </ul>
    </div >)

}

export default Articlelist;