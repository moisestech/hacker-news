import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Loading({ text = "Loading" }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, 500);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <div className="container loading">
      <p className="text-center">{content}</p>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};
