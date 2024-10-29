import React, { useEffect, useState } from "react";
import { IonApp, IonContent, IonToolbar, IonTitle, IonIcon } from "@ionic/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import ClockGuatemala from './components/ClockGuatemala';
import { mapOutline } from "ionicons/icons";
import TaskList from "./components/TaskList";
import { SheetSide } from "./components/SheetSide";

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

import { LocalNotifications } from '@capacitor/local-notifications';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const requestPermission = async () => {
      const result = await LocalNotifications.requestPermissions();
      if (result.display !== 'granted') {
        console.warn("Permiso de notificaciones no concedido");
      }
    };

    const visited = localStorage.getItem("visited");
    if (!visited) {
      onOpen(); // Abre el modal si es la primera visita
    } else {
      setUserName(visited); // Establece el nombre del usuario desde el localStorage
    }

    requestPermission(); // Solicita permiso para las notificaciones
  }, [onOpen]);

  const handleNameSubmit = () => {
    if (userName.trim() !== "") {
      localStorage.setItem("visited", userName); // Guarda el nombre en localStorage
      onOpenChange(); // Cierra el modal
    }
  };

  return (
    <IonApp>
      <IonToolbar>
        <IonTitle>
          <div style={styles.welcomeContainer}>
            <h1 style={styles.welcomeText}>Hi, {userName || "there"}!</h1>
            <p style={styles.subText}>
              <IonIcon icon={mapOutline} style={styles.badgeStyle} />
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
    color: "#aaa",
    display: "flex",
    alignItems: "center",
  },
  badgeStyle: {
    fontSize: "0.9rem",
    color: "#ffd700",
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
