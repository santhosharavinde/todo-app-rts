import { useState } from "react";
import { Task } from "./types";
import AddTask from "./AddTask";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
   setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  return (
    <>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask}/>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
