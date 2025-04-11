type TaskListHeaderProps = {
    count: number
}

const TaskListHeader = ({count}: TaskListHeaderProps) => {
  return (
    <p>Total Task: {count}</p>
  )
}

export default TaskListHeader