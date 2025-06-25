import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // Список задач
  const [text, setText] = useState('');   // Текущее значение поля ввода

  // Добавить новую задачу
  const addTask = () => {
    if (text.trim() === '') return;
    const newTask = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
    setText('');
  };

  // Переключить выполнена/не выполнена
  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  // Удалить задачу
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 Список дел</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите задачу"
          style={{ flex: 1 }}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul style={{ marginTop: '20px', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#f9f9f',
              marginBottom: '10px',
              textDecoration: task.done ? 'line-through' : 'none'
            }}
          >
            <span onClick={() => toggleDone(task.id)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
