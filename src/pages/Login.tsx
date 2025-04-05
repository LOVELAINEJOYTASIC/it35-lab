import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonCheckbox,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonLabel,
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false); // New state for checkbox

  const doLogin = async () => {
    if (!isRobotChecked) {
      setAlertMessage('Please confirm that you are not a robot.');
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };
  
  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <div style={{
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:'25%'
        }}>
          <IonAvatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '150px',
              height: '150px',
              borderRadius: '50%', 
              overflow: 'hidden' 
            }}
          >
            <IonIcon 
              icon={logoIonic}
              color='primary'
              style={{ fontSize: '120px', color: '#6c757d' }} 
            />
          </IonAvatar>
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>USER LOGIN</h1>
          <IonInput
            label="Email" 
            labelPlacement="floating" 
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput style={{ marginTop:'10px' }}      
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          
          {/* "I'm not a robot" checkbox with a notification message */}
          <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
            <IonCheckbox 
              checked={isRobotChecked} 
              onIonChange={e => setIsRobotChecked(e.detail.checked)} 
            />
            <IonLabel style={{ marginLeft: '8px' }}>I'm not a robot</IonLabel>
          </div>
          {/* Notification message */}
          <div style={{ marginTop: '5px', fontSize: '12px', color: '#6c757d' }}>
            <p>Please verify that you are a human by checking the box above. This helps us prevent automated login attempts.</p>
          </div>
        </div>
        
        <IonButton 
          onClick={doLogin} 
          expand="full" 
          shape='round' 
          disabled={!isRobotChecked} // Disable button if checkbox is not checked
        >
          Login
        </IonButton>

        <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape='round'>
          Don't have an account? Register here
        </IonButton>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* IonToast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
