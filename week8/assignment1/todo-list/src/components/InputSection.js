import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const InputSection = ({
  handleSubmit,
  tasks,
  setTasks,
  updatedTask,
  setUpdatedTask,
  isUpdate,
  handleSubmitUpdate,
}) => {
  return (
    <>
      <Form onSubmit={!isUpdate ? handleSubmit : handleSubmitUpdate}>
        <InputGroup className="my-3">
          <Form.Control
            placeholder="Add a Task"
            value={!isUpdate ? tasks : updatedTask.tasks}
            type="text"
            onChange={
              !isUpdate
                ? (e) => setTasks(e.target.value)
                : (e) =>
                    setUpdatedTask({ ...updatedTask, tasks: e.target.value })
            }
          />
          {!isUpdate ? (
            <Button
              data-testid="mybutton"
              className="text-light"
              variant="info"
              type="submit"
            >
              Add Todo
            </Button>
          ) : (
            <Button className="text-light" variant="info" type="submit">
              Update Todo
            </Button>
          )}
        </InputGroup>
      </Form>
    </>
  );
};

export default InputSection;
