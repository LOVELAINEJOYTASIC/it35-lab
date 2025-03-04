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
  IonTitle, 
  IonToolbar, 
  IonProgressBar, 
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false); 
  const navigation = useIonRouter();

  const doLogin = () => {
    setLoading(true); 
   
    setTimeout(() => {
      setLoading(false); 
      navigation.push('/it35-lab/app', 'forward', 'replace'); 
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN FORM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
    
        {loading && (
          <IonProgressBar type="indeterminate" />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
          <IonItem>
          <IonInput label="Username:" placeholder="" >
          <IonInput type="password" label="Password:" value="" placeholder="">
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
              <IonInputPasswordToggle slot="end" />
            </IonInput>
          </IonItem>
          
          <IonButton onClick={() => doLogin()} expand="full">
            LOGIN FORM
          </IonButton>
        </div>
      </IonContent>
    </IonPage>

  );
};

export default Login;
