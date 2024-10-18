import React, { useState } from "react";
import {Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {ChevronDownIcon} from './ChevronDownIcon';


interface AddTaskProps {
  addTask: (taskDescription: string) => void;
}


const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(new Set(["merge"]));

  const descriptionsMap = {
    merge: "Ideal para tareas que no tienen urgencia",
    squash: "Ideal cuando tiene que completar una tarea en un tiempo especifico.",
    rebase: "Ideal para actividades que llevan varias etapas o requieren avances graduales.",
  };

  const labelsMap = {
    merge: "Normal",
    squash: "Contra Reloj",
    rebase: "Progreso",
  };

  const selectedOptionValue = Array.from(selectedOption)[0] || "merge"; // Asegúrate de que siempre haya un valor

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
      <Button type="submit" style={styles.button}>
        Agregar Tarea
      </Button>
      <ButtonGroup variant="flat">
        <Button>{labelsMap[selectedOptionValue as keyof typeof labelsMap]}</Button>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly>
              <ChevronDownIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Merge options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={(keys) => setSelectedOption(new Set(keys as Iterable<string>))}
            className="max-w-[300px]"
          >
            <DropdownItem key="merge" description={descriptionsMap["merge"]}>
              {labelsMap["merge"]}
            </DropdownItem>
            <DropdownItem key="squash" description={descriptionsMap["squash"]}>
              {labelsMap["squash"]}
            </DropdownItem>
            <DropdownItem key="rebase" description={descriptionsMap["rebase"]}>
              {labelsMap["rebase"]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
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