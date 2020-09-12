import React from "react";
import PropTypes from "prop-types";
import PostMetaInfo from "../PostMetaInfo";
import PostTitle from "../PostTitle";

export default function PostsList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => {
        const { id, by, url, score, time, descendants, title } = post;

        return (
          <li key={id} className="post">
            <span class="rank">{index + 1}.▲</span>
            <span>
              <PostTitle title={title} link={url} />
              <PostMetaInfo
                by={by}
                score={score}
                descendants={descendants}
                time={time}
                id={id}
                rank={score}
                url={url}
              />
            </span>
          </li>
        );
      })}
    </div>
  );
}

PostsList.propType = {
  posts: PropTypes.array.isRequired,
};
