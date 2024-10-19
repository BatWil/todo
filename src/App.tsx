import React, { useEffect, useState } from "react";
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon } from "@ionic/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react"; // Importa los componentes necesarios
import ClockGuatemala from './components/ClockGuatemala'; // Asegúrate de que la ruta sea correcta
import { mapOutline, personCircleOutline } from "ionicons/icons";
import TaskList from "./components/TaskList";
import { SheetSide } from "./components/SheetSide";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.always.css";
import "./theme/variables.css";

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [firstVisit, setFirstVisit] = useState<boolean>(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      onOpen(); // Abre el modal si es la primera visita
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
      setUserName(visited); // Establece el nombre del usuario desde el localStorage
    }
  }, [onOpen]);

  const handleNameSubmit = () => {
    localStorage.setItem("visited", userName); // Guarda el nombre en localStorage
    onOpenChange(false); // Cierra el modal
  };

  return (
    <IonApp>
      <IonToolbar>
        <IonTitle>
          <div style={styles.welcomeContainer}>
            <h1 style={styles.welcomeText}>Hi, {userName || "Sarah"}!</h1>
            <p style={styles.subText}>
              <IonIcon icon={mapOutline} style={styles.badgeStyle} />
              <span style={{ margin: '0 2px' }}></span> {/* Espacio de 10 píxeles */}
              <ClockGuatemala />
            </p>
          </div>
        </IonTitle>
        <div style={styles.sheetContainer}>
          <SheetSide />
        </div>
      </IonToolbar>

      <IonContent fullscreen>
        <div style={styles.inputContainer}>
          <TaskList />
        </div>
      </IonContent>

      {/* Modal para ingresar el nombre */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Bienvenido</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Ingresa tu nombre"
              placeholder="Escribe tu nombre"
              variant="bordered"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={handleNameSubmit}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </IonApp>
  );
};

const styles = {
  welcomeContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
    marginTop: "40px",
    marginLeft: "25px",
  },
  welcomeText: {
    fontSize: "1.5rem",
    margin: 0,
    color: "white",
  },
  subText: {
    fontSize: "0.8rem",
    color: "#aaa", // Color del texto del subtítulo
    display: "flex",
    alignItems: "center",
  },
  badgeStyle: {
    fontSize: "0.9rem",
    color: "#ffd700", // Color para el ícono de Prime
    marginRight: "4px",
  },
  sheetContainer: {
    position: "absolute" as "absolute",
    top: "40px",
    right: "-50px",
  },
  inputContainer: {},
};

export default App;
