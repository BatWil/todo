import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { Storage } from '@ionic/storage';

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

const store = new Storage();
store.create();

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await store.get('tasks');
      if (storedTasks) setTasks(storedTasks);
    };
    loadTasks();
  }, []);

  const toggleCompletion = async (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    await store.set('tasks', updatedTasks);
  };

  const deleteTask = async (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    await store.set('tasks', updatedTasks);
  };

  const addTask = async (taskDescription: string) => {
    const newTask = { id: Date.now().toString(), task: taskDescription, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await store.set('tasks', updatedTasks);
  };

  return (
    <div style={styles.container}>
      <AddTask addTask={addTask} />
      <div style={styles.taskList}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  taskList: {
    width: '100%',
    marginTop: '20px',
  },
};

export default TaskList;