import * as actionTypes from './actionTypes';
import { navigate } from '@reach/router';

const receiveArticles = (articles) => ({
    type: actionTypes.RECEIVE_ARTICLES,
    payload: articles
})

export const getArticles = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REQUEST_ARTICLES,
        method: 'get',
        endpoint: `/articles?sort_by=${getState().state.articlesSortingBy}`
    }).then(response => {
        if (response.data && response.data.articles) {
            dispatch(receiveArticles(response.data.articles));
        }
    });
};

export const postArticle = (articleToAdd) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.POST_ARTICLE,
        method: 'post',
        endpoint: '/articles',
        data: articleToAdd
    }).then(response => {
        if (response.data.article) {
            navigate(`/articles/${response.data.article.article_id}`)
        };
    });
}

export const deleteArticle = (articleToDelete) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_ARTICLE,
        method: 'delete',
        endpoint: `/articles/${articleToDelete}`,
    }).then(response => {
        if (response.status === 204) {
            dispatch(getArticles());
        }
    });
}

const receiveTopics = (topics) => ({
    type: actionTypes.RECEIVE_TOPICS,
    payload: topics
})

export const getTopics = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REQUEST_ARTICLES,
        method: 'get',
        endpoint: `/topics`
    }).then(response => {
        if (response.data && response.data.topics) {
            dispatch(receiveTopics(response.data.topics));
        }
    });
}

export const addTopic = (topicToAdd) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.POST_TOPIC,
        method: 'post',
        endpoint: '/topics',
        data: topicToAdd
    }).then(response => {
        if (response.status === 201) {
            dispatch(getTopics());
        }
    });
}



export const setSortBy = (sortBy) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.SORT_ARTICLES_BY,
        payload: sortBy
    });
    dispatch(getArticles());
}

const receiveComments = (articleId, comments) => ({
    type: actionTypes.RECEIVE_COMMENTS,
    articleId,
    comments
})

export const getComments = (articleId) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REQUEST_COMMENTS,
        method: 'get',
        endpoint: `/articles/${articleId}/comments`
    }).then(response => {
        if (response.data && response.data.comments) {
            dispatch(receiveComments(articleId, response.data.comments));
        }
    });
}