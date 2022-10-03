import { ChangeEvent, useState } from "react";
import { Task } from "../interfaces/Task";
import { FiPlus } from "react-icons/fi";

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Props {
  addNewTask: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
}

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleChange = ({ target: { name, value } }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleCreateTask = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask({ ...task, completed: false });
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          rows={2}
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <FiPlus className="mb-1" />
        </button>
      </form>
    </div>
  );
}
