import { connect } from 'react-redux';
import Main from '../components/Main';
import {
    getArticles,
    getTopics,
    setSortBy
} from '../../utils/actions';

const mapStateToProps = state => ({
    articles: state.state.get('articles') || null,
    topics: state.state.get('topics'),
    articlesSortingBy: state.state.get('articlesSortingBy') || '',
});

const mapDispatchToProps = dispatch => ({
    getArticles: () => {
        dispatch(getArticles());
    },
    getTopics: () => {
        dispatch(getTopics());
    },
    setSortBy: (value) => {
        dispatch(setSortBy(value));
    }
});

const MenuChoiceContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MenuChoiceContainer;
