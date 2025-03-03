import React, { useState } from 'react';
import { 
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonMenuButton, 
  IonPage, 
  IonProgressBar,
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [loading, setLoading] = useState(false);

  const doLogin = () => {
    setLoading(true);
    // Simulate a login process
    setTimeout(() => {
      setLoading(false);
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 2000); // Simulate a 2-second login process
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {loading && <IonProgressBar type="indeterminate"></IonProgressBar>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} > 
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />  
          </IonAvatar>
          <IonItem>
            <IonInput type="password" label="Password:" value="" placeholder="">
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              <IonInput label="Username:" placeholder="" >
              </IonInput>
            </IonInput>
          </IonItem>
        </div>
        <IonButton onClick={() => doLogin()} expand="full">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;