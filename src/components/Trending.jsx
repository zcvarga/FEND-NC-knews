import React, { Component } from 'react';
import axios from 'axios';
class Trending extends Component {

    state = {
        topNews: []
    }

    getTrendingNews() {

        const url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=f65255c1ccfb4f67bbe491b32974df96';
        axios.get(url)
            .then(({ data: { articles } }) => {
                this.setState({ topNews: articles })
            })
    }

    componentDidMount() {
        this.getTrendingNews();
    }


    render() {
        if (this.state.topNews[0]) console.log(this.state.topNews[0])
        if (!this.state.topNews) return <p>Data loading</p>
        else {
            return (<ul className='flex-container-1'>
                {this.state.topNews.map(newsItem => {
                    return <li className='flex-trending' key={this.state.topNews.indexOf(newsItem)}>
                        <img className='image' src={newsItem.urlToImage} ></img>
                        <p className='title'> {newsItem.title}</p>


                    </li>
                })}

            </ul>)
        }

    }

}

export default Trending;