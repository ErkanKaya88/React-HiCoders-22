import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoListItem = ({ taskList, handleUpdate, isDoneChange }) => {
  return (
    <ListGroup className="pe-0">
      {taskList
        // .filter((task) => task.isDone === true)
        .map(
          (task) =>
            task.isDone === true && (
              <ListGroup.Item
                className="d-flex justify-content-between"
                key={task.id}
              >
                {task.tasks}
                <span>
                  <button
                    onClick={() => handleUpdate(task.id)}
                    className="border-0 bg-white rounded"
                  >
                    <i className="bi bi-pencil-square text-light bg-success"></i>
                  </button>
                  <button
                    onClick={() => isDoneChange(task.id)}
                    className="border-0 bg-white rounded"
                  >
                    <i className="bi bi-arrow-right-square-fill text-success"></i>
                  </button>
                </span>
              </ListGroup.Item>
            )
        )}
    </ListGroup>
  );
};

export default TodoListItem;
