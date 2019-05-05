import { connect } from 'react-redux';
import Main from '../components/Main';
import {
    getArticles,
    getTopics,
    setSortBy,
    logIn,
    logOut
} from '../../utils/actions';

const mapStateToProps = state => ({
    articles: state.state.get('articles') || null,
    topics: state.state.get('topics'),
    articlesSortingBy: state.state.get('articlesSortingBy') || '',
    user: state.state.get('user')
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
    },
    logIn: (username, password) => {
        dispatch(logIn(username, password));
    },
    logOut: () => dispatch(logOut())
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MenuContainer;
