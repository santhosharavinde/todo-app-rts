import { useState } from 'react';

type Priority = "High" | "Medium" | "Low";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([{ id: 1, title: "Learn React", isCompleted: true }]);
  const [taskName, setTaskName] = useState("");

  const onAddTask = () => {
    setTasks([...tasks, {id: Date.now(), title: taskName, isCompleted: false}])
  }
  return (
    <>
      <h1>Tasks</h1>
      <label htmlFor="task-input">Add Tasks:</label>
      <input id="task-input" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      <button onClick={onAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
