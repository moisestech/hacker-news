import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { fetchUser, fetchPosts } from "../../utils/api";
import Loading from "../Loading";
import UserAbout from "./components/UserAbout";
import UserPosts from "./components/UserPosts";

function userReducer(state, action) {
  const { type } = action;

  if (type === "fetch") {
    return {
      ...state,
      loadingUser: true,
      loadingPosts: true,
    };
  } else if (type === "user") {
    return {
      ...state,
      user: action.user,
      loadingUser: false,
    };
  } else if (type === "posts") {
    return {
      ...state,
      posts: action.posts,
      loadingPosts: false,
    };
  } else if (type === "error") {
    return {
      ...state,
      loadingUser: false,
      loadingPosts: false,
      error: action.message,
    };
  } else {
    throw new Error(`Action type ${type} not recognized, plrease try again.`);
  }
}

const initialState = {
  user: null,
  posts: null,
  loadingUser: false,
  loadingPosts: null,
  error: null,
};

export default function User() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const userId = searchParams.get("userId");

  const [state, dispatch] = useReducer(userReducer, initialState);
  const { user, posts, loadingPosts, loadingUser } = state;

  useEffect(() => {
    dispatch({ type: "fetch" });

    fetchUser(userId).then((user) => {
      dispatch({ type: "user", user });
      const { submitted } = user;
      return fetchPosts(submitted.slice(0, 50 || []))
        .then((posts) => {
          dispatch({ type: "posts", posts });
        })
        .catch((error) => {
          dispatch = { type: "error", message: error.message };
        });
    });
  }, [userId]);

  return (
    <div className="user">
      {loadingUser && <Loading text={"Fetching User"} />}

      {user && <UserAbout user={user} />}
      {loadingPosts && <Loading text={`Fetching User's Posts`} />}
      <ul className="user-posts">
        {posts && <h2>Posts:</h2>}
        {posts && !loadingPosts && <UserPosts user={user} posts={posts} />}
      </ul>
    </div>
  );
}
