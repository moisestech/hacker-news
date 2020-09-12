import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

export default function PostMetaInfo({ by, score, descendants, time, id }) {
  return (
    <>
      <div className="meta-info-light">
        <span class="subtext">
          {score} points by{" "}
          <Link
            to={{ pathname: "/user", search: `?userId=${by}` }}
            className="user-link"
          >
            {by}
          </Link>{" "}
          on {formatDate(time)}{" "}
          <Link
            to={{ path: "/post", seearch: `?id=${id}` }}
            className="post-link"
          >
            {descendants} comments
          </Link>
        </span>
      </div>
    </>
  );
}

PostMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  url: PropTypes.string,
};
