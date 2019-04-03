import React from 'react';
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';

const Topic = ({ slug, description }) => {
    return (
        <li key={slug} className='flex-topics'>
            <h3>{description}</h3>
            <p>Slug: {slug}</p>
            <p>Article number: </p>
            <Link className='link' to={`/topics/${slug}/articles`}><Button variant="outlined" >
                SEE ARTICLES
                </Button></Link>
        </li >)

}
export default Topic;