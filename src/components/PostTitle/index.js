import React from "react";
import PropTypes from "prop-types";

export default function PostTitle({ title, link }) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + " 🔗" : str;
  }

  return (
    <div className="post-title">
      <a className="link" href={link}>
        {title}
      </a>
      <a className="small-link" href={link}>
        {link ? `(${truncate(link, 20)})` : null}
      </a>
    </div>
  );
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
