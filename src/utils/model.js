import { Map } from 'immutable';

export const initialState = Map({
    articles: [],
    articlesSortingBy: '',
    comments: {},
    topics: [],
    user: null,
    selectedArticleId: null,
    singleArticle: null
})
