import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

export default function PostMetaInfo({ by, score, descendants, time, id }) {
  return (
    <>
      <div className="meta-info-light">
        <span className="subtext">
          {score} points by{" "}
          <span>
            <Link
              to={{ pathname: "/user", search: `userId=${by}` }}
              className="user-link"
            >
              {by}
            </Link>
          </span>
          <span> on {formatDate(time)} </span>
          {typeof descendants === "number" && (
            <span>
              with{" "}
              <Link
                to={{ pathname: "/post", search: `postId=${id}` }}
                className="post-link"
              >
                {descendants} comments
              </Link>
            </span>
          )}
        </span>
      </div>
    </>
  );
}

PostMetaInfo.propTypes = {
  by: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  score: PropTypes.number,
  descendants: PropTypes.number,
  time: PropTypes.number.isRequired,
  url: PropTypes.string,
};
