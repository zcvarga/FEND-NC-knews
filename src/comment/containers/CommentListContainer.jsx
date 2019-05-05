import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import {
    getComments,
    deleteComment
} from '../../utils/actions';

const mapStateToProps = (state, ownProps) => ({
        comments: state.state.get('comments'),
        user: state.state.get('user')
    });

const mapDispatchToProps = dispatch => ({
    getComments: (articleId) => {
        dispatch(getComments(articleId));
    },
    deleteComment: (commentId) => {
      dispatch(deleteComment(commentId));
    }
});

const CommentListContainer = connect(mapStateToProps, mapDispatchToProps)(CommentList);

export default CommentListContainer;
