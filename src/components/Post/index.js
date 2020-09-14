import React, { useState, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchItem, fetchPosts, fetchComments } from "../../utils/api";

import Loading from "../Loading";
import Title from "../PostTitle";
import PostMetaInfo from "../PostMetaInfo";
import Comment from "../Comment";

function postReducer(state, action) {
  const { type } = action;

  if (type === "fetch") {
    return {
      ...state,
      loadingComments: true,
      loadingPost: true,
    };
  } else if (type === "post") {
    return {
      ...state,
      loadingPost: false,
      post: action.post,
    };
  } else if (type === "comments") {
    return {
      ...state,
      loadingComments: false,
      comments: action.comments,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.message,
    };
  } else {
    throw new Error(`Action type ${type} not recognized, please try again.`);
  }
}

const initialState = {
  post: null,
  loadingPost: null,
  comments: null,
  loadingComments: true,
  error: null,
};

export default function Post() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const postId = searchParams.get("postId");

  const [state, dispatch] = useReducer(postReducer, initialState);
  const { comments, post } = state;

  useEffect(() => {
    dispatch({ type: "fetch" });
    fetchItem(postId)
      .then((post) => {
        dispatch({ type: "post", post });
        return fetchComments(post.kids || []);
      })
      .then((comments) => {
        setTimeout(() => {
          dispatch({ type: "comments", comments });
        }, 2000);
      })
      .catch((error) => {
        dispatch({ type: "error", message: error.message });
      });
  }, [postId]);

  return (
    <ul className="comments-section">
      <div>
        {!post && <Loading text="Fetching Post" />}
        {post && <Title title={post.title} link={post.url} />}
        {post && (
          <PostMetaInfo
            by={post.by}
            score={post.score}
            time={post.time}
            id={post.id}
            descendants={post.descendants}
          />
        )}
      </div>

      {!comments && <Loading text="Fetching comments" />}
      {comments &&
        comments.map((comment) => {
          const { by, id, text, time } = comment;
          return (
            <li key={id}>
              <Comment text={text} user={by} time={time} comment={comment} />
            </li>
          );
        })}
    </ul>
  );
}

Post.propTypes = {};
