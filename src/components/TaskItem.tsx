// TaskItem.tsx
import React from "react";
import { Checkbox } from "@nextui-org/checkbox";


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
        backgroundColor: task.completed ? "#d3ffd3" : "#ffd3d3", //#d3ffd3: Verde, #ffd3d3: Rojo
        borderRadius: "4px",
      }}
    >
      <Checkbox
        isSelected={task.completed}
        onChange={() => toggleCompletion(task.id)}
        style={{ marginRight: "100px" }}
      >
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.task}
        </span>
      </Checkbox>
      <div style={{ marginLeft: "auto" }}>
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: "transparent", // Fondo transparente | transparent
            border: "none",
            cursor: "pointer",
            padding: "0",
            display: "flex",
            alignItems: "center",
            marginLeft: "10px", // Espaciado entre el texto de tarea y el botón de eliminar
          }}
        >
          <span style={{ color: "#FF0000", fontWeight: "bold" }}>Eliminar</span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;