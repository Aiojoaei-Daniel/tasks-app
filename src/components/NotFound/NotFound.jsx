import React from "react";

import "./notFound.css";

const NotFound = ({ action }) => {
  return <div className="not-found">No task {action}.</div>;
};

export default NotFound;
