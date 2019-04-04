import React from 'react';
import { Router, Link } from "@reach/router";
// import Header from '../components/Header'
import ArticleList from '../../article/components/ArticleList';
import TopicList from '../../topic/containers/TopicListContainer';
import Subheader from '../containers/SubheaderContainer';
import SingleTopicView from '../../topic/components/SingleTopicView';
import SingleArticleView from '../../article/containers/SingleArticleViewContainer';
import Button from '@material-ui/core/Button';
import NewArticle from '../../article/containers/NewArticleContainer';

class Main extends React.Component {
    componentDidMount() {
        this.props.getArticles();
        this.props.getTopics();
    }
    render() {
        const {
            topics, articles, articlesSortingBy, setSortBy, getArticles, getTopics
        } = this.props;
        return (
            <>
                <h1 id='main-header'><nav>
                    <Link to='/articles'>
                        <Button variant="outlined" >ARTICLES</Button>
                    </Link>
                    <Link to='/topics'>
                        <Button variant="outlined" >TOPICS</Button>
                    </Link>
                </nav></h1>
                <Subheader topics={topics} setSortBy={() => setSortBy()} value={articlesSortingBy} />
                <Router>
                    <ArticleList path='/articles' articles={articles} />
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