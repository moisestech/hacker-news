import * as React from "react";
import PropTypes from "prop-types";

export default function ThemeButton({ theme, toggleTheme }) {
  return (
    <button
      style={{ fontSize: 30 }}
      className="btn-clear"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🔦" : "💡"}
    </button>
  );
}

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
