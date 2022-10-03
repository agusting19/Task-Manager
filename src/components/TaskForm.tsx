import { FiPlus } from 'react-icons/fi';

export default function TaskForm() {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />
        <textarea
          name="description"
          placeholder="Write a description"
          rows={2}
          className="form-control mb-3 rounded-0 shadow-none border-0"
        ></textarea>
        <button className="btn btn-primary">
          Save
          <FiPlus className="mb-1" />
        </button>
      </form>
    </div>
  );
}
