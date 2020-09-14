import React from "react";
import PropTypes from "prop-types";
import { truncateURL } from "../../utils/helpers";

export default function PostTitle({ title, link }) {
  return (
    <div className="post-title">
      <a className="link" href={link}>
        {title}
      </a>
      <a className="small-link" href={link}>
        {link ? `(${truncateURL(link, 20)})` : null}
      </a>
    </div>
  );
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
