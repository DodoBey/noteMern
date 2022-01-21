import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../constants/postsConstants";

export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true }
        case POST_LIST_SUCCESS:
            return { loading: false, posts: action.payload }
        case POST_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return { loading: true }
        case POST_CREATE_SUCCESS:
            return { loading: false, success: true }
        case POST_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}