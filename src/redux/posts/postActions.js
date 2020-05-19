import { FETCH_POSTS, NEW_POST } from './postTypes'
import PostService from '../../services/PostService'

const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        PostService.getAllPosts()
        .then((response) => {
            const posts = response.data
            dispatch(fetchPostsSuccess(posts))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}