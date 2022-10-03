import './App.css';
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'




import Edit from './components/Edit'
import NewPost from './components/NewPost'

const App = () => {
  const [posts, setPosts] = useState([])
  // const [editFrom, setEditForm] = useState(false)


  const getPosts = () => {
    axios.get('https://evening-taiga-64655.herokuapp.com/api/tattoo').then(
      (response) => setPosts(response.data),
      (err) => console.error(err),
    ).catch((error) => console.error(error))
  }

  const handleCreate = (addBlogPost) => {
    // let nextId = products[products.length - 1].id + 1
    axios.post('https://evening-taiga-64655.herokuapp.com/api/tattoo', addBlogPost)
      .then((response) => {
        // addItem.id = nextId
        setPosts([...posts, response.data])
      })
  }

  const handleDelete = (deleteBlogPost) => {
    axios.delete('https://evening-taiga-64655.herokuapp.com/api/tattoo/' + deleteBlogPost.id).then
      ((response) => {
        setPosts(posts.filter(blogPost => blogPost.id !== deleteBlogPost.id))
      })
  }

  const handleUpdate = (editBlogPost) => {
    axios.put('https://evening-taiga-64655.herokuapp.com/api/tattoo' + editBlogPost.id, editBlogPost).then((response) => {
      setPosts(posts.map((blogPost) => {
        return editBlogPost.id !== editBlogPost.id ? blogPost : editBlogPost

      }))
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  // const showEditForm = () => {
  //   setEditForm(false)
  // }

  return (
    <>
    <div className='header'>InkPost.com</div>
    <div>
      <div className="container-md wholeCard">
      <NewPost handleCreate={handleCreate} />
        {posts.map((blogPost) => {
          return (
            <>
            <div>
            <br/>
            <br/>
            <div id='cards'  className='post cardClass  border border-5'>
              <img class="img-responsive img-thumbnail imgSize" alt="Responsive image"  src={blogPost.image} />
              <p className='info'>{blogPost.artist}</p>
              <br/>
              <p className='info' >{blogPost.description}</p>
              <br/>
              <Edit handleUpdate={handleUpdate} />
              <br/>
              <button class="btn btn-danger" onClick={() => {handleDelete(blogPost)}} value={blogPost.id}>Delete</button>
              </div>
        </div>
              </>
          )
        })}
      </div>
      </div>
    </>
  )
}



export default App;