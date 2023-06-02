import React, { useState, useReducer } from "react"

const initialSatate = {
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
  
  return (
    <div>PostsList</div>
  )
}

export default PostsList
