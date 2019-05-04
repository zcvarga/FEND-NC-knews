import axios from 'axios';
import * as actionTypes from './actionTypes';

const thunkActionTypes = [
    actionTypes.REQUEST_ARTICLES,
    actionTypes.POST_ARTICLE,
    actionTypes.DELETE_ARTICLE,
    actionTypes.REQUEST_COMMENTS,
    actionTypes.REQUEST_TOPICS,
    actionTypes.POST_TOPIC
]

const apiWrapper = (method, url, data) => (axios({
    method,
    url,
    data,
}));


const apiMiddleware = ({ getState }) => next => (action) => {
    const { method, endpoint, data, type } = action;
    if (thunkActionTypes.indexOf(type) > -1) {
        const url = 'https://dry-island-66406.herokuapp.com/api' + endpoint;
        return apiWrapper(method, url, data);
    }

    return next(action);
};

export default apiMiddleware;