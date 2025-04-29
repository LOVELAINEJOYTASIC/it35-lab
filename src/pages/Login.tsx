import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonCheckbox,
  IonContent, 
  IonInput, 
  IonInputPasswordToggle,  
  IonLabel,
  IonPage,  
  IonToast, 
  useIonRouter
} from '@ionic/react';
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
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  // Perform login action
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
      <IonContent className='ion-padding' style={{ background: 'linear-gradient(135deg, #6A5BFF, #4C75F6)' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
        }}>
          {/* Card Container */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px 40px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
          }}>
            {/* Centered Avatar */}
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
                margin: '0 auto', // This centers the avatar horizontally
              }}
            >
              {/* Replace with your custom avatar image */}
              <img 
                src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699" 
                alt="User Avatar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </IonAvatar>

            <h1 style={{
              color: '#4C75F6',
              marginBottom: '20px',
              fontWeight: '600',
              fontSize: '1.8rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
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
              onIonChange={e => setEmail(e.detail.value!)}
              style={{
                marginBottom: '20px',
                width: '100%',
                borderRadius: '10px',
                padding: '10px',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#4C75F6'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />

            {/* Password Input */}
            <IonInput 
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              style={{
                marginBottom: '20px',
                width: '100%',
                borderRadius: '10px',
                padding: '10px',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#4C75F6'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            {/* Robot Check */}
            <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
              <IonCheckbox 
                checked={isRobotChecked} 
                onIonChange={e => setIsRobotChecked(e.detail.checked)} 
                style={{ borderColor: '#4C75F6' }}
              />
              <IonLabel style={{ marginLeft: '8px', fontWeight: '500' }}>I'm not a robot</IonLabel>
            </div>

            <div style={{ marginTop: '10px', fontSize: '14px', color: '#6c757d', textAlign: 'center' }}>
              <p>Please verify that you are a human by checking the box above. This helps us prevent automated login attempts.</p>
            </div>

            {/* Login Button */}
            <IonButton 
              onClick={doLogin} 
              expand="full" 
              shape="round" 
              disabled={!isRobotChecked} 
              style={{
                backgroundColor: '#4C75F6',
                color: 'white',
                fontWeight: '600',
                padding: '15px',
                marginTop: '20px',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2f55b4'} // Hover effect
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4C75F6'}
            >
              Login
            </IonButton>

            {/* Register Link Button */}
            <IonButton 
              routerLink="/it35-lab/register" 
              expand="full" 
              fill="clear" 
              shape="round" 
              style={{
                marginTop: '15px',
                color: '#4C75F6',
                fontWeight: '600',
                borderRadius: '12px',
              }}
              onMouseEnter={(e) => e.target.style.color = '#2f55b4'} // Hover effect
              onMouseLeave={(e) => e.target.style.color = '#4C75F6'}
            >
              Don't have an account? Register here
            </IonButton>
          </div>

          {/* Alerts and Toast */}
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
