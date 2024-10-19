// TaskItem.tsx
import React from "react";
import { Checkbox } from "@nextui-org/checkbox";




import {chip} from "@nextui-org/react";


interface Task {
  id: string;
  task: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <div
      style={{
      display: "flex",
      alignItems: "center",
      padding: "10px",
      margin: "5px 0",
      backgroundColor: task.completed ? "#f5a525" : "transparent", //#d1e890 un verde
      borderRadius: "4px",
      }}
    >
      <Checkbox
      isSelected={task.completed}
      onChange={() => toggleCompletion(task.id)}
      style={{ marginRight: "100px" }}
      defaultSelected color="default"
      >
      <span style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "black" : "white" }}>
        {task.task}
      </span>
      </Checkbox>
      
      <div style={{ marginLeft: "auto" }}>
      <button
        onClick={() => deleteTask(task.id)}
        style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
        }}
      >
        <span style={{ color: task.completed ? "black" : "white", fontWeight: "bold", display: "flex", alignItems: "center" }}>
        Eliminar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
          style={{ marginLeft: "5px", width: "20px", height: "20px" }}
        >
          <path
          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          />
          <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M80 112h352"
          />
          <path
          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          />
        </svg>
        </span>
      </button>
      </div>
    </div>
  );
};

export default TaskItem;