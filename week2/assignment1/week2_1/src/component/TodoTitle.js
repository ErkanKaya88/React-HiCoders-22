import React from "react";

function TodoTitle() {
  return (
    <div>
      <h3
        className="bg-success text-white text-center p-1 rounded"
        data-testid="todo-title"
      >
        TODO LIST
      </h3>
    </div>
  );
}

export default TodoTitle;
