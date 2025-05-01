import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose
}) => {
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

  const doLogin = async () => {
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
      <IonContent
        className="ion-padding"
        style={{ background: 'linear-gradient(135deg, #6A5BFF, #4C75F6)' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '20px'
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px 40px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '400px',
              textAlign: 'center'
            }}
          >
            <IonAvatar
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                margin: '0 auto'
              }}
            >
              <img
                src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
                alt="User Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </IonAvatar>

            <h1
              style={{
                color: '#4C75F6',
                marginBottom: '20px',
                fontWeight: '600',
                fontSize: '1.8rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              User Login
            </h1>

            {/* Email Input */}
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              style={{
                marginBottom: '20px',
                width: '100%',
                borderRadius: '10px',
                color: '#000' // ✅ Make text visible
              }}
            />

            {/* Password Input */}
            <IonInput
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              style={{
                marginBottom: '20px',
                width: '100%',
                borderRadius: '10px',
                color: '#000' // ✅ Make text visible
              }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton
              onClick={doLogin}
              expand="full"
              shape="round"
              style={{
                backgroundColor: '#4C75F6',
                color: 'white',
                fontWeight: '600',
                padding: '15px',
                marginTop: '20px',
                borderRadius: '12px'
              }}
            >
              Login
            </IonButton>

            <IonButton
              routerLink="/it35-lab/register"
              expand="full"
              fill="clear"
              shape="round"
              style={{
                marginTop: '15px',
                color: '#4C75F6',
                fontWeight: '600',
                borderRadius: '12px'
              }}
            >
              Don't have an account? Register here
            </IonButton>
          </div>

          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
