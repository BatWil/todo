import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { Storage } from '@ionic/storage';
import { Drivers } from '@ionic/storage';




interface Task {
  id: string;
  task: string;
  completed: boolean;
}

let store: Storage;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Inicializa el almacenamiento una sola vez
  useEffect(() => {
    const initStore = async () => {
      store = new Storage({
        name: "mydb",
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
      });
      await store.create();
      const storedTasks = await store.get("tasks");
      if (storedTasks) setTasks(storedTasks);
    };
    initStore();
  }, []);

  const toggleCompletion = async (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    await store.set("tasks", updatedTasks);
  };

  const deleteTask = async (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    await store.set("tasks", updatedTasks);
  };

  const addTask = async (taskDescription: string) => {
    const newTask = { id: Date.now().toString(), task: taskDescription, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await store.set("tasks", updatedTasks);
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
    flexDirection: 'column' as 'column',
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
