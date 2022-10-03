import { useState } from "react";

const NewPost = (props) => {
    let emptyPosts = {
        image: "",
        artist: "",
        description: "",
    };

    const [blogPost, setBlogPost] = useState(emptyPosts);

    const handleChange = (event) => {
        setBlogPost({ ...blogPost, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleCreate(blogPost);
        setBlogPost({
            image: "",
            artist: "",
            description: "",
        });
    };

    return (
        <>
        <div class="newForm mb-3"> 
            <form className="work" onSubmit={handleSubmit}>
                <label for="formFileMultiple" class="form-label" htmlFor="image">Image: </label>
                <input class="form-control" type="text" name="image" value={blogPost.image} onChange={handleChange} />
                <br />
                <br />
                <label class="form-label" htmlFor="artist">Artist: </label>
                <input class="form-control" type="text" name="artist" value={blogPost.artist} onChange={handleChange} />
                <br />
                <br />
                <label class="form-label" htmlFor="description">Description: </label>
                <input class="form-control" type="text" name="description" value={blogPost.description} onChange={handleChange} />
                <br />
                <br />
                <input className="btn btn-secondary" type="submit" />
            </form>
            <img  className="newTattoo" src="https://www.dubuddha.org/wp-content/uploads/2018/10/Floral-Portrait-Tattoo-by-Samurai-Standoff.jpg"/>
            </div>
        </>
    );
};

export default NewPost
