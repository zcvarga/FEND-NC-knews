import { connect } from 'react-redux';
import Main from '../components/Main';
import {
    getArticles,
    getTopics,
    setSortBy
} from '../../utils/actions';

const mapStateToProps = state => ({
    articles: state.state.getIn(['state', 'articles']) || null,
    topics: state.state.getIn(['state', 'topics']),
    articlesSortingBy: state.state.getIn(['state', 'articlesSortingBy']) || '',
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