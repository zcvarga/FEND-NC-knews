import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";


class SingleArticleView extends Component {
    state = {
        article: null
    }
    getArticle = id => {
        const url = `https://dry-island-66406.herokuapp.com/api/articles/${id}`;
        axios.get(url).then(({ data: { article } }) => this.setState({ article: article }))
    }



    componentDidMount() {
        const { id } = this.props;
        this.getArticle(id);
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props;
        if (prevProps.id !== id) {
            this.getArticle(id);
        }

    }


    // article_id: 33
    // author: "weegembump"
    // body: "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading."
    // comment_count: "6"
    // created_at: "2018-05-30T00:00:00.000Z"
    // title: "Seafood substitutions are increasing"
    // topic: "cooking"
    // votes: 0

    render() {
        console.log(this.state.article)
        if (!this.state.article) return (<div className="loading-dots">
            <h1 id='loading' >Loading</h1>
            <h1 className="dot one">.</h1><h1 className="dot two">.</h1><h1 className="dot three">.</h1>
        </div>
        )
        else return (
            <div className='article-view'>
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.author}</p>
                <p>{this.state.article.topic}</p>
                <p>{this.state.article.body}</p>
                <p>Comments: {this.state.article.comment_count}</p>
                <p>Created at: {this.state.article.created_at}</p>
            </div>)
    }


}

export default SingleArticleView;


// import PropTypes from 'prop-types';
// singleBookViewPropTypers