import { connect } from 'react-redux';
import SingleArticleView from '../components/SingleArticleView';
import {
    deleteArticle
} from '../../utils/actions';

const mapDispatchToProps = dispatch => ({
    deleteArticle: (articleToDelete) => {
        console.log(articleToDelete);
        dispatch(deleteArticle(articleToDelete));
    }
});

const SingleArticleViewContainer = connect(null, mapDispatchToProps)(SingleArticleView);

export default SingleArticleViewContainer;