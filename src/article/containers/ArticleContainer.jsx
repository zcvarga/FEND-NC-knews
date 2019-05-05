import { connect } from 'react-redux';
import Article from '../components/Article';
import {
    getComments
} from '../../utils/actions';

const mapDispatchToProps = dispatch => ({
    getComments: (articleId) => {
        dispatch(getComments(articleId));
    }
});

const ArticleContainer = connect(null, mapDispatchToProps)(Article);

export default ArticleContainer;
