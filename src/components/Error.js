import React from "react";

const Error = ({ err }) => {
  return (
    <div>
      <h1>Unfortunately. {err}. Try again</h1>
    </div>
  );
};

export default Error;
