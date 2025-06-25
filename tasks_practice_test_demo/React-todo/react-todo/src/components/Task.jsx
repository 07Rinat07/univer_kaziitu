function Task({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        marginBottom: '10px',
        textDecoration: task.done ? 'line-through' : 'none',
      }}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
}

export default Task;
