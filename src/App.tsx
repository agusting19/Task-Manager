import { useState } from 'react';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import logo from './logo.svg';
import './App.css';

interface Props {
  title: string;
}

function App({title}: Props) {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'Learn React',
    description: 'Learn React with TypeScript',
    completed: false,
  }]);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm /* addANewTask={addANewTask} */ />
          </div>
          <div className="col-md-8">
            <div className="row">
              {/* <h6 className="text-light d-flex justify-content-end">
                Total Tasks <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6> */}

              <TaskList tasks={tasks} /* deleteATask={deleteATask} */ />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
