import { combineReducers } from 'redux';
import { initialState } from './model';
import * as actionTypes from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ARTICLES:
            return state.set('articles', action.payload);
        case actionTypes.RECEIVE_TOPICS:
            return state.set('topics', action.payload);
        case actionTypes.RECEIVE_COMMENTS:
            const index = state.articles.findIndex(element => element.article_id === action.articleId);
            if (state && state.articles && index !== -1) {
                console.log(action.comments);
                return state.setIn(['comments', index], action.comments);
            }
        case actionTypes.SORT_ARTICLES_BY:
            return state.set('articlesSortingBy', action.payload);
        default:
            return state;
    }
};

export default combineReducers({ state: reducer })

