import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({task, deleteTask}: Props) {
  const handleDelete = () => {
    if (task.id) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="card card-body">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
}
