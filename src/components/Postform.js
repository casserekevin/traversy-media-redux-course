import React, { useState } from 'react'

import PostService from '../services/PostService'

export default function Postform() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const post = {
            title,
            body
        }

        const addPost = async (post) => {
            await PostService.addPost(post)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        addPost(post)
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title: </label><br/>
                    <input 
                    type="text" 
                    name='title' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="">Body:</label><br/>
                    <textarea 
                    name="body" 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}/>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
