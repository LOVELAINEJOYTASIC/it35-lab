import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonText,
  IonAlert,
  IonToast,
  IonPage,
  IonButtons
} from '@ionic/react';
import { useState } from 'react';
import { useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigation = useIonRouter();

  const handleLogin = () => {
    if (username && password) {
     
      setToastMessage('Successfully logged in!');
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1000); 
    } else {
      setShowAlert(true); 
    }
  };

  const handleSignup = () => {
    if (username && email && password) {
    
      setToastMessage('Successfully signed up!');
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1000); 
    } else {
      setShowAlert(true); 
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
     
        <IonItem>
          <IonLabel position="stacked">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            required
            placeholder="Enter your username"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            required
            placeholder="Enter your password"
          />
        </IonItem>

        <IonButton onClick={handleLogin} expand="full">
          Login
        </IonButton>

        <IonButton expand="full" color="secondary" onClick={() => setIsSignupOpen(true)}>
          Sign Up
        </IonButton>

       
        <IonModal isOpen={isSignupOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Sign Up</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsSignupOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                required
              />
            </IonItem>

            <IonButton expand="full" color="primary" onClick={handleSignup}>
              Sign Up
            </IonButton>

            <IonText color="medium">
              <p>Already have an account? <a onClick={() => setIsSignupOpen(false)}>Login here</a></p>
            </IonText>
          </IonContent>
        </IonModal>

        
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message="Please fill in all required fields."
          buttons={['OK']}
        />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
