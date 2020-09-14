import * as React from "react";
import PropTypes from "prop-types";
import PostTitle from "../../../PostTitle";
import PostMetaInfo from "../../../PostMetaInfo";

export default function UserPosts({ user, posts }) {
  return posts.map((post) => {
    return (
      <li key={post.id}>
        <PostTitle title={post.title} link={post.url} />
        <PostMetaInfo
          by={user.id}
          score={post.score}
          descendants={post.descendants}
          time={post.time}
          url={post.url}
        />
      </li>
    );
  });
}

UserPosts.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};
