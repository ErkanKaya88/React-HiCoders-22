import { render, screen } from "@testing-library/react";
import TodoListItem from "../TodoListItem";

const taskList = [
  {
    tasks: "Georgie",
    isDone: "True",
  },
];

test("tasksList is rendered", () => {
  render(<TodoListItem taskList={taskList} />);

  taskList.forEach((person) => {
    expect(screen.getByText(`tasks: ${person.tasks}`)).toBeInTheDocument();
  });
});
