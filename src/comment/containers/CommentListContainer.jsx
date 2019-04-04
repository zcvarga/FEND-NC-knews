import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import {
    getComments
} from '../../utils/actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.id;
    const comments = state.getIn(['state', 'comments']);
    return ({
        comments: comments[id]
    });
}

const mapDispatchToProps = dispatch => ({
    getComments: (articleId) => {
        console.log(articleId);
        dispatch(getComments(articleId));
    }
});

const CommentListContainer = connect(mapStateToProps, mapDispatchToProps)(CommentList);

export default CommentListContainer;