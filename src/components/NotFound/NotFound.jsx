import React from "react";

import "./notFound.css";

const TEXT_NOT_FOUND = "No task ";

const NotFound = ({ action }) => {
  return (
    <div className="not-found">
      {TEXT_NOT_FOUND} {action}.
    </div>
  );
};

export default NotFound;
