import { useState } from "react";



const Edit = (props) => {
    const [blogPost, setBlogPost] = useState({ ...props.blogPost })

    const handleChange = (event) => {
        setBlogPost({ ...blogPost, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(blogPost)
    }

    return (
        <>
        <div className="grid-container">
        <details className="details">
           <form className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="image">Image Address: </label>
            <input type="text" name="image" value={blogPost.image} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="artist">Artist Name: </label>
            <input type="text" className="artist" value={blogPost.artist} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={blogPost.description} onChange={handleChange}/>
            <br/>
            <br/>
            <input className="btn btn-secondary" type="submit" />
           </form>
            </details>
            </div>
        </>
    )
}

export default Edit