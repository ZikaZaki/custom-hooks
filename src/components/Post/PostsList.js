import React, { useReducer, useRef, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import Post from "./Post"
/**-------------------------------------useLayoutEffect Hook-----------------------------------------
 * useLayoutEffect hook is similar to useEffect hook, but it runs synchronously after all DOM mutations.
 * That means it runs before the browser updates the DOM.
 * Here's the execution order for the example below:
 * 1- API request comes in 
 * 2- State is updated
 * 3- React renders the component
 * 4- useLayoutEffect hook runs
 * 6- Browser updates the DOM
 * ---------------------------------------------------------------------------------------------------
 * USE CASES:
 * - DOM measurements
 * - DOM mutations
 * - Layout calculations
 * - Painting
 * ---------------------------------------------------------------------------------------------------
 */

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
  const ref = useRef(null)

  useLayoutEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data })
      })
      .catch(error => {
        dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message })
      })

    console.log("useLayoutEffect hook", state.posts.length)
    
    if (!ref.current) return;
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [state.posts.length])

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then(response => {
//         dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data })
//     })
//     .catch(error => {
//         dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message })
//     })

//     console.log("useEffect hook", state.posts.length)

//     if (!ref.current) return;
//     ref.current.scrollTop = ref.current.scrollHeight;
//   }, [state.posts.length])
  
  return (
    <div className="posts-container">
        <h2>Posts List</h2>
        <br />
        {state.loading && <p>Loading...</p>}
        {state.error && <p>{state.error}</p>}
        <div className="posts-list" ref={ref}>
            {state.posts && state.posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div> 
    </div>
  )
}

export default PostsList
