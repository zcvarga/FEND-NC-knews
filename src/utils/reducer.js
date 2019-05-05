import { combineReducers } from 'redux';
import { initialState } from './model';
import * as actionTypes from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ARTICLES:
            return state.set('articles', action.payload);
        case actionTypes.RECEIVE_SINGLE_ARTICLE:
            return state.set('singleArticle', action.payload);
        case actionTypes.RECEIVE_TOPICS:
            return state.set('topics', action.payload);
        case actionTypes.RECEIVE_COMMENTS:
            return state.setIn(['comments', action.articleId], action.comments)
        case actionTypes.SORT_ARTICLES_BY:
            return state.set('articlesSortingBy', action.payload);
        case actionTypes.LOG_IN:
            return state.set('user', { username: action.username, password: action.password });
        case actionTypes.LOG_OUT:
            return state.set('user', null);
        default:
            return state;
    }
};

export default combineReducers({ state: reducer })
