import Task from './Task';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul style={{ marginTop: '20px', padding: 0 }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
