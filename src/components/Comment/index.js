import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PostMetaInfo from "../PostMetaInfo";
import { formatDate } from "../../utils/helpers";

export default function Comment({ by, id, text, user, time }) {
  return (
    <div className="comment">
      <div className="comment-user">
        <Link
          to={{ pathname: "/user", search: `?userId=${user}` }}
          className="user-link"
        >
          <h2>{user}</h2>
        </Link>
        <PostMetaInfo comment={true} by={by} time={time} id={id} />
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

Comment.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};
