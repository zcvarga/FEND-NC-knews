import React from 'react';


const HeadingTwo = (props) => {
    return (<div>
        <h2 id='second-header'>
            Second header

            {/* <select>
                {props.topics.map(topic => {
                    return <option value={topic.slug}>{topic.slug.toUpperCase()}</option>
                })}


            </select> */}
        </h2>
    </div>)
}

export default HeadingTwo;