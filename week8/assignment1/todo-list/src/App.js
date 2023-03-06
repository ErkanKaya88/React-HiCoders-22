import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import InputSection from "./components/InputSection";
import IsDoneItem from "./components/IsDoneItem";
import IsDoneTitle from "./components/IsDoneTitle";
import TodoListItem from "./components/TodoListItem";
import TodoTitle from "./components/TodoTitle";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [tasks, setTasks] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      { tasks: tasks, id: Math.floor(Math.random() * 1000), isDone: true },
    ]);
    setTasks("");
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const updatedTaskList = taskList.map((item) => {
      if (item.id === updatedTask.id) {
        item.tasks = updatedTask.tasks;
      }
      return item;
    });
    setTaskList(updatedTaskList);
    setIsUpdate(!isUpdate);
  };

  const isDoneChange = (pId) => {
    const updatedTodoList = taskList.map((task) => {
      if (task.id === pId) {
        task.isDone = false;
      }
      return task;
    });
    setTaskList(updatedTodoList);
  };

  const todoChange = (pId) => {
    const updatedIsDoneList = taskList.map((task) => {
      if (task.id === pId) {
        task.isDone = true;
      }
      return task;
    });
    setTaskList(updatedIsDoneList);
  };

  const handleDelete = (pId) => {
    setTaskList(taskList.filter((task) => task.id !== pId));
  };

  const handleUpdate = (pId) => {
    const updateToDo = taskList.find((task) => task.id === pId);
    setIsUpdate(!isUpdate);
    setUpdatedTask(updateToDo);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <InputSection
              setTasks={setTasks}
              tasks={tasks}
              handleSubmit={handleSubmit}
              updatedTask={updatedTask}
              isUpdate={isUpdate}
              isDoneChange={isDoneChange}
              handleSubmitUpdate={handleSubmitUpdate}
              setUpdatedTask={setUpdatedTask}
            />
          </Col>
        </Row>
        <Row>
          <Col className="me-2 ">
            <Row>
              <TodoTitle />
            </Row>
            <Row>
              <TodoListItem
                taskList={taskList}
                setTasks={setTasks}
                isDoneChange={isDoneChange}
                handleUpdate={handleUpdate}
              />
            </Row>
          </Col>
          <Col className="ms-2 ">
            <Row>
              <IsDoneTitle />
            </Row>
            <Row>
              <IsDoneItem
                taskList={taskList}
                todoChange={todoChange}
                handleDelete={handleDelete}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
