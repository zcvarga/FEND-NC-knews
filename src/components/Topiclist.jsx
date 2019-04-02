import React from 'react';
import Topic from './Topic'


const Topiclist = (props) => {

    return (<div >
        <ul className='flex-container-3'>
            {props.topics.map(({ slug, description }) => {
                return <Topic key={slug} slug={slug} description={description} />

            })}

        </ul>
    </div >)

}

export default Topiclist;