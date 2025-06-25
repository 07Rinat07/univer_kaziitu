import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const loadTasks = () => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
};

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (text.trim() === '') return;
    const newTask = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 Список дел</h1>

      <TaskInput
        text={text}
        onTextChange={(e) => setText(e.target.value)}
        onAdd={addTask}
      />

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')}>Активные</button>
        <button onClick={() => setFilter('done')}>Выполненные</button>
      </div>

      <TaskList tasks={filteredTasks} onToggle={toggleDone} onDelete={deleteTask} />
    </div>
  );
}

export default App;
