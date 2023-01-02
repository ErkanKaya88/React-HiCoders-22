import React, { useState } from "react";

function TodoListItem() {
  const [todoList, settodoList] = useState([
    "go shopping",
    "school",
    "take drugs",
    "birthday party",
    "learn react",
  ]);
  return (
    <div>
      <ul class="list-group" data-testid="todo-list">
        {todoList.map((gorev) => (
          <li class="list-group-item d-flex justify-content-between">
            {gorev}
            <i class="bi bi-arrow-right bg-success text-white px-1 rounded"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListItem;
