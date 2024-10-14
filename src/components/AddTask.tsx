import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskDescription: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim() === "") return;
    onAddTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Escribe una tarea"
        style={{
          padding: "15px",
          width: "250px",
          border: "1px solid #444",
          borderRadius: "8px",
          backgroundColor: "#1e1e1e",
          color: "#f1f1f1",
          outline: "none",
          fontSize: "14px",
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Agregar Tarea
      </button>
    </div>
  );
};

export default AddTask;
