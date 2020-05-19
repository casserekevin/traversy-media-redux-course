import api from './api'

class PostService {
    static getAllPosts(){
        return api.get('posts')
    }

    static addPost(post){
        return api.post('posts', post)
    }
}

export default PostService