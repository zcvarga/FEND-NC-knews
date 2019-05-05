import { connect } from 'react-redux';
import SingleArticleView from '../components/SingleArticleView';
import {
    deleteArticle,
    getSingleArticle
} from '../../utils/actions';

const mapStateToProps = state => ({
    selectedArticleId: state.state.get('selectedArticleId'),
    article: state.state.get('singleArticle')
});

const mapDispatchToProps = dispatch => ({
    deleteArticle: (articleToDelete) => {
        console.log(articleToDelete);
        dispatch(deleteArticle(articleToDelete));
    },
    getArticle: (selectedArticleId) => {
        dispatch(getSingleArticle(selectedArticleId));
    }

});

const SingleArticleViewContainer = connect(mapStateToProps, mapDispatchToProps)(SingleArticleView);

export default SingleArticleViewContainer;
