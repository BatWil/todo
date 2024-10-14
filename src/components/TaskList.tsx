import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleCompletion = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (taskDescription: string) => {
    const newTask = { id: Date.now().toString(), task: taskDescription, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <AddTask onAddTask={addTask} />
      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
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

export default TaskList;
