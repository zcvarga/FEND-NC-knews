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
import Button from '@material-ui/core/Button';
import NewArticle from './components/NewArticle';


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      topics: [],
      sort_by: '',
      user: null
    }
    this.getArticles = this.getArticles.bind(this);
  }


  setSortBy = (value) => {
    this.setState({ sort_by: value })
  }

  setArticles = (articles) => {
    this.setState({ articles: articles })
  }

  getArticles = () => {
    const url = `https://dry-island-66406.herokuapp.com/api/articles?sort_by=${this.state.sort_by}`
    axios.get(url).then(({ data: { articles } }) => this.setState({ articles: articles }))
  }

  getTopics = () => {
    const url = 'https://dry-island-66406.herokuapp.com/api/topics'
    axios.get(url).then(({ data: { topics } }) => this.setState({ topics: topics }))
  }

  logIn = (username, password) => {
    if (!(['tickle122', 'grumpy19', 'happyamy2016', 'cooljmessy', 'weegembump', 'jessjelly'].includes(username))) {
      window.alert('please enter existing username');
      return;
    }
    if (!password) {
      window.alert('please enter password');
      return;
    }
    this.setState({
      user: username
    })
  }

  logOut = () => {
    this.setState({
      user: null
    })
  }

  componentDidMount() {
    this.getArticles()
    this.getTopics();
  }
  componentDidUpdate(_, prevState) {
    if (this.state.sort_by !== prevState.sort_by || this.state.articles.length !== prevState.articles.length) {
      this.getArticles();
    }
  }

  render() {
    console.log(this.state)
    // console.log(this.state.articles)
    return (
      <div className="App">
        <h1 id='main-header'><Nav />
          <div className='topic-header'>
            {
              this.state.user ? <Button variant="outlined" onClick={() => this.logOut()}>LOG OUT</Button>
                :
                <>
                  <input type="text" placeholder="Login" onChange={(event) => this.setState({ username: event.target.value })}></input>
                  <input type="text" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })}></input>
                  <Button variant="outlined" onClick={() => this.logIn(this.state.username, this.state.password)}>LOG IN</Button>
                </>
            }
          </div>
        </h1>
        <HeadingTwo topics={this.state.topics} setSortBy={this.setSortBy} value={this.state.sort_by} />
        <Router>
          <Articlelist path='/articles' articles={this.state.articles} getArticles={this.getArticles} user={this.state.user} />
          <SingleArticleView path='/articles/:id' getArticles={this.getArticles} user={this.state.user} />
          <NewArticle path='articles/new-article' user={this.state.user} topics={this.state.topics} />
          <Topiclist path='/topics' topics={this.state.topics} getTopics={this.state.getTopics} user={this.state.user} />
          <SingleTopicView path='/topics/:slug/articles' sort_by={this.state.sort_by} user={this.state.user} />
        </Router>
      </div>
    );
  }
}

const Nav = props => {
  return (
    <nav>
      <Link to='/articles'>
        <Button variant="outlined" >ARTICLES</Button>
      </Link>
      <Link to='/topics'>
        <Button variant="outlined" >TOPICS</Button>
      </Link>

    </nav>
  )
}

export default App;
