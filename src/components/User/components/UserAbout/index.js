import * as React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../../../utils/helpers";

export default function UserAbout({ user }) {
  return (
    <div className="user-about">
      <h1>{user.id}</h1>
      <span className="date">
        joined <b>{formatDate(user.created)}</b>
      </span>
      <span className="karma">
        has <b>{user.karma.toLocaleString()} karma</b>
      </span>
      <p dangerouslySetInnerHTML={{ __html: user.about }} />
    </div>
  );
}

UserAbout.propTypes = {
  user: PropTypes.object.isRequired,
};
