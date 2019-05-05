import React from 'react';
import { Router, Link } from "@reach/router";
// import Header from '../components/Header'
import ArticleList from '../../article/components/ArticleList';
import TopicList from '../../topic/containers/TopicListContainer';
import Subheader from '../containers/SubheaderContainer';
import SingleTopicView from '../../topic/containers/SingleTopicViewContainer';
import SingleArticleView from '../../article/containers/SingleArticleViewContainer';
import Button from '@material-ui/core/Button';
import NewArticle from '../../article/containers/NewArticleContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

    componentDidMount() {
        this.props.getArticles();
        this.props.getTopics();
    }

    render() {
        const {
            topics, articles, articlesSortingBy, setSortBy, getArticles, getTopics, logOut, logIn
        } = this.props;
        const loginButtons = this.props.user ? <Button variant="outlined" onClick={() => logOut()}>LOG OUT</Button>
            :
            <>
              <input type="text" placeholder="Login" onChange={(event) => this.setState({ username: event.target.value })} value={this.state.username}></input>
              <input type="text" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password}></input>
              <Button variant="outlined" onClick={() => logIn(this.state.username, this.state.password)}>LOG IN</Button>
            </>
        return (
            <>
                <h1 id='main-header'><nav>
                    <Link to='/articles'>
                        <Button variant="outlined" >ARTICLES</Button>
                    </Link>
                    <Link to='/topics'>
                        <Button variant="outlined" >TOPICS</Button>
                    </Link>
                    <div className='topic-header'>
            { loginButtons }
          </div>
                </nav></h1>
                <Subheader topics={topics} setSortBy={() => setSortBy()} value={articlesSortingBy} />
                <Router>
                    <ArticleList path='/articles' articles={articles} />
                    <ArticleList path='/' articles={articles} />
                    <SingleArticleView path='/articles/:id' getArticles={() => getArticles()} />
                    <NewArticle path='articles/new-article' />
                    <TopicList path='/topics' topics={topics} getTopics={() => getTopics()} />
                    <SingleTopicView path='/topics/:slug/articles' sort_by={articlesSortingBy} />
                </Router>
            </>
        )
    }
}

export default Main;
