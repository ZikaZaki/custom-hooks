import React, { useReducer, useEffect } from "react"
import axios from "axios"
import Post from "./Post"

const initialState = {
    posts: [],
    loading: true,
    error: ""
}

const reducer = (state, action) => {
  switch(action.type) {
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: ""
      }
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

function PostsList() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data })
    })
    .catch(error => {
        dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message })
    })
  }, [])
  
  return (
    <div>
        <h2>Posts List</h2>
        <br />
        {state.loading && <p>Loading...</p>}
        {state.error && <p>{state.error}</p>}
        <div className="posts-list">
            {state.posts && state.posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div> 
    </div>
  )
}

export default PostsList
