// TaskItem.tsx
import React from "react";

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
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
        style={{ marginRight: "10px" }} // Espacio entre el checkbox y el texto
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.task}
      </span>
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
{/*           <img
            src="./resources/trash-bin.png" // Asegúrate de que la ruta sea correcta
            alt="Eliminar"
            style={{
              width: "15px", // Ajusta el tamaño de la imagen según sea necesario
              height: "15px",
              marginRight: "5px" // Espacio entre la imagen y el texto
            }}
          /> */}
          <span style={{ color: "#FF0000", fontWeight: "bold" }}>Eliminar</span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
