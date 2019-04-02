import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
class Trending extends Component {

    state = {
        topNews: [],
        bodyOpened: false,
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
        // console.log(this.state.bodyOpened)
        // if (this.state.topNews[0]) console.log(this.state.topNews[0])
        if (!this.state.topNews) return <p>Data loading</p>
        else {
            return (<ul className='flex-container-1'>
                {this.state.topNews.map(({ urlToImage, title, description }) => {
                    return <NewsItem key={title} urlToImage={urlToImage} title={title} description={description} />
                })}

            </ul>)
        }
    }
}

export default Trending;