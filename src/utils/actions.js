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
        endpoint: `/articles?sort_by=${getState().state.get('articlesSortingBy') || ''}`
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

const receiveSingleArticle = (data) => ({
    type: actionTypes.RECEIVE_SINGLE_ARTICLE,
    payload: data
})

export const getSingleArticle = (selectedArticleId) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REQUEST_SINGLE_ARTICLE,
        method: 'get',
        endpoint: `/articles/${selectedArticleId}`,
    }).then(response => {
      if (response.data && response.data.article) {
          console.log(response.data)
          dispatch(receiveSingleArticle(response.data.article));
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

export const deleteComment = (commentId) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_COMMENT,
        method: 'delete',
        endpoint: `/comments/${commentId}`,
    }).then(response => {
        if (response.status === 204) {
            dispatch(getComments());
        }
    });
}

export const postComment = (articleId, newComment) => (dispatch, getState) => {
  if (!getState().state.get('user')) {
      window.alert('You are not logged in');
      return;
  }
  dispatch({
      type: actionTypes.POST_COMMENT,
      method: 'post',
      endpoint: `/articles/${articleId}/comments`,
      data: newComment
  }).then(response => {
      if (response.status === 200) {
        console.log(response);
      }
  });
}

export const updateVotes = (type, id, value) => (dispatch, getState) => {
  dispatch({
      type: actionTypes.UPDATE_VOTE,
      method: 'patch',
      endpoint: `/${type}/${id}`,
      inc_votes: value
  }).then(response => {
      if (response.status === 200) {
        console.log(response);
      }
  });
}

export const logIn = (username, password) => (dispatch) => {
    if (!(['tickle122', 'grumpy19', 'happyamy2016', 'cooljmessy', 'weegembump', 'jessjelly'].includes(username))) {
      window.alert('please enter existing username');
      return;
    }
    if (!password) {
      window.alert('please enter password');
      return;
    }
    dispatch({
      type: actionTypes.LOG_IN,
      username,
      password
    })
  }

  export const logOut = () => (dispatch) => {
    dispatch({
        type: actionTypes.LOG_OUT,
    })
  };
