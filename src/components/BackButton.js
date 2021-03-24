import React from "react";
import { useHistory } from "react-router-dom";

const BackBtn = () => {
  let history = useHistory();

  return (
    <button
      type="button"
      class="btn btn-primary mt-4"
      onClick={() => {
        history.goBack();
      }}
    >
      go Back
    </button>
  );
};

export default BackBtn;
