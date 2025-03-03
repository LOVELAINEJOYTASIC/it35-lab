import React, { useState, useEffect } from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton,
  IonAlert
} from '@ionic/react';

const About: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
          <div style={{ marginBottom: '20px' }}>
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </div>
          <IonButton onClick={() => setShowAlert(true)}>Show Alert</IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Alert'}
            subHeader={'Important message'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;