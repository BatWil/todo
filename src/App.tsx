import React from "react";
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import TaskList from "./components/TaskList";

const App: React.FC = () => (
  <IonApp>
{/*     <IonHeader>
      <IonToolbar>
        <IonTitle><center> To-Do List </center></IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent fullscreen>
      <TaskList />
    </IonContent>
  </IonApp>
);

export default App;
