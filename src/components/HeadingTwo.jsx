import React from 'react';


const HeadingTwo = (props) => {
    console.log(props)
    return (<div>
        <h2 id='second-header'>
            Second header
            <select name='sortBy' onChange={e => props.setSortBy(e.target.value)}>
                <option value=''>Sort by</option>
                <option value='votes'>Votes</option>
                <option value='created_at'>Date created</option>
                <option value='comment_count'>Comment count</option>
            </select>
        </h2>
    </div>)
}

// export const setSortBy = (value) => {
//     return value;
// }

export default HeadingTwo;