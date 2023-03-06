import React from "react";
import { ListGroup } from "react-bootstrap";

const IsDoneItem = ({ taskList, todoChange, handleDelete }) => {
  return (
    <ListGroup className="pe-0">
      {taskList
        //.filter((task) => task.isDone === false)
        .map(
          (task) =>
            task.isDone === false && (
              <ListGroup.Item
                className="d-flex justify-content-between text-decoration-line-through"
                key={task.id}
              >
                {task.tasks}
                <span>
                  <button
                    onClick={() => todoChange(task.id)}
                    className="border-0 bg-white rounded"
                  >
                    <i className="bi bi-arrow-left-square-fill text-danger"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="border-0 bg-white rounded"
                  >
                    <i className="bi bi-trash ms-auto text-danger"></i>
                  </button>
                </span>
              </ListGroup.Item>
            )
        )}
    </ListGroup>
  );
};

export default IsDoneItem;
