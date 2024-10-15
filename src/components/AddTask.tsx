import React, { useState } from "react";

interface AddTaskProps {
  addTask: (taskDescription: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskDescription.trim() === "") return;
    addTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Escribe una tarea"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Agregar Tarea
      </button>
    </form>
  );
};

// Define los tipos específicos para las propiedades de CSS
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

const styles: {
  container: React.CSSProperties,
  input: React.CSSProperties,
  button: React.CSSProperties
} = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap' as FlexWrap, // Agrega el tipo específico aquí
  },
  input: {
    padding: '15px',
    width: '250px',
    border: '1px solid #444',
    borderRadius: '8px',
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
    outline: 'none',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default AddTask;
