import React, { useState } from "react";
import { setupIonicReact, IonApp, IonContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Dark theme palette */
import "@ionic/react/css/palettes/dark.always.css";

/* Theme variables */
import "./theme/variables.css";

import TaskList from "./components/TaskList";

setupIonicReact();

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <IonApp>
      <IonContent fullscreen>
        <div style={styles.inputContainer}>
          <TaskList />
        </div>

      </IonContent>
    </IonApp>
  );
};

const styles = {
  inputContainer: {
    // Puedes agregar más estilos aquí según lo necesites
  },
};

export default App;
