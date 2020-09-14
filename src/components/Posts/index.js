import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchMainPosts } from "../../utils/api";
import Loading from "../Loading";
import PostsList from "../PostsList";

function postsReducer(state, action) {
  const { type } = action;

  if (type === "fetch") {
    return {
      ...state,
      posts: null,
      loading: true,
      error: null,
    };
  } else if (type === "success") {
    return {
      ...state,
      posts: action.posts,
      loading: false,
      error: null,
    };
  } else if (type === "error") {
    return {
      ...state,
      posts: null,
      loading: false,
      error: action.message,
    };
  } else {
    throw new Error(`Action type: ${type} isn't supported.`);
  }
}

export default function Posts({ type }) {
  // useReducer
  const [state, dispatch] = useReducer(postsReducer, {
    posts: null,
    loading: true,
    error: false,
  });

  // useEffect, dispatch useReducer type:"fetch"MainPosts
  useEffect(() => {
    dispatch({ type: "fetch" });

    fetchMainPosts(type)
      .then((res) => {
        dispatch({ type: "success", posts: res });
      })
      .catch((err) => {
        dispatch({ type: "error", message: err.message });
      });
  }, [type]);

  // function to display Loading
  const isLoading = () => state.loading && state.error === null;

  return (
    <div className="post">
      {isLoading() && <Loading text="Fetching Posts" />}
      {state.error && <p className="center-text error">{state.error}</p>}
      {state.posts && <PostsList posts={state.posts} />}
    </div>
  );
}

Posts.propTypes = {
  type: PropTypes.oneOf(["top", "new"]),
};

// UI.Dev, React Learning, Opionnated React
// useReducer resources
