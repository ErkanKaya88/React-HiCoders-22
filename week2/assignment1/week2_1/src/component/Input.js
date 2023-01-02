import React from "react";

function Input() {
  return (
    <div class="input-group m-3 mx-auto">
      <input
        data-testid="input"
        type="text"
        className="form-control"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        data-testid="button"
        className="btn btn-outline-secondary bg-info text-white"
        type="button"
        id="button-addon2"
      >
        Add Todo
      </button>
    </div>
  );
}

export default Input;
