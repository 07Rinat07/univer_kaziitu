function TaskInput({ text, onTextChange, onAdd }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Введите задачу"
        style={{ flex: 1 }}
      />
      <button onClick={onAdd}>Добавить</button>
    </div>
  );
}

export default TaskInput;
