import { connect } from 'react-redux';
import NewArticle from '../components/NewArticle';
import {
    postArticle
} from '../../utils/actions';

const mapStateToProps = state => ({
    articles: state.state.get('articles') || null,
    topics: state.state.get('topics'),
    articlesSortingBy: state.state.get('articlesSortingBy') || '',
    user: state.state.get('user')
});

const mapDispatchToProps = dispatch => ({
    postArticle: (articleToAdd) => {
        console.log(articleToAdd);
        dispatch(postArticle(articleToAdd));
    }
});

const NewArticleContainer = connect(mapStateToProps, mapDispatchToProps)(NewArticle);

export default NewArticleContainer;
