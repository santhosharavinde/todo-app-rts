import { useState } from "react";

type AddTaskProps = {
  onAddTask: (value: string) => void;
};

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();
    if (!trimmedTaskName) return;
    onAddTask(trimmedTaskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Tasks:</label>
      <input
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTask;
