import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Router, Link } from "@reach/router";
// import Heading from './components/Heading'
import Articlelist from './components/Articlelist'
import Topiclist from './components/Topiclist'
import HeadingTwo from './components/HeadingTwo';
import SingleTopicView from './components/SingleTopicView';
import SingleArticleView from './components/SingleArticleView';


class App extends Component {
  state = {
    articles: [],
    topics: [],
    sort_by: ''
  }

  setSortBy = (value) => {
    this.setState({ sort_by: value })
  }
  getArticles = () => {
    const url = `https://dry-island-66406.herokuapp.com/api/articles?sort_by=${this.state.sort_by}`
    axios.get(url).then(({ data: { articles } }) => this.setState({ articles: articles }))
  }

  getTopics = () => {
    const url = 'https://dry-island-66406.herokuapp.com/api/topics'
    axios.get(url).then(({ data: { topics } }) => this.setState({ topics: topics }))
  }

  componentDidMount() {
    this.getArticles()
    this.getTopics();
  }
  componentDidUpdate(_, prevState) {
    if (this.state.sort_by !== prevState.sort_by) {
      this.getArticles();
    }

  }

  render() {
    // console.log(this.state.sort_by)
    // console.log(this.state.articles)
    return (
      <div className="App">
        <h1 id='main-header'><Nav /></h1>
        <HeadingTwo topics={this.state.topics} setSortBy={this.setSortBy} />
        <Router>
          <Articlelist path='/articles' articles={this.state.articles} />
          <SingleArticleView path='/articles/:id' />
          <Topiclist path='/topics' topics={this.state.topics} />
          <SingleTopicView path='/topics/:slug/articles' sort_by={this.state.sort_by} />
        </Router>
      </div>
    );
  }
}

const Nav = props => {
  return (
    <nav>
      <Link className='link' to='/articles'>Articles</Link>
      <Link className='link' to='/topics'>Topics</Link>

    </nav>
  )
}

export default App;
