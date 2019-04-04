import { connect } from 'react-redux';
import NewArticle from '../components/NewArticle';
import {
    postArticle
} from '../../utils/actions';

const mapDispatchToProps = dispatch => ({
    postArticle: (articleToAdd) => {
        console.log(articleToAdd);
        dispatch(postArticle(articleToAdd));
    }
});

const NewArticleContainer = connect(null, mapDispatchToProps)(NewArticle);

export default NewArticleContainer;