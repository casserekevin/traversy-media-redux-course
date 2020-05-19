import { FETCH_POSTS, NEW_POST } from './postTypes'

const initialState = {
    items: [],
    item: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                payload: action
            }
        default:
            return state;
    }
}

export default postReducer