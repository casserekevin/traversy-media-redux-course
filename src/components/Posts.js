import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../redux'


const Posts = ({posts, fetchPosts}) => {

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            )}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)