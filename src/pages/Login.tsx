import { IonAlert, IonAvatar, IonButton, IonCheckbox, IonContent, IonIcon, IonInput, IonInputPasswordToggle, IonLabel, IonPage, IonToast, useIonRouter } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState, useEffect } from 'react';
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
  const [captchaA, setCaptchaA] = useState<number>(0);
  const [captchaB, setCaptchaB] = useState<number>(0);
  const [captchaResult, setCaptchaResult] = useState<number>(0);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(30);
  const [isLockedOut, setIsLockedOut] = useState(false);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaA(a);
    setCaptchaB(b);
    setCaptchaResult(a + b);
  };

  useEffect(() => {
    if (loginAttempts >= 3) {
      generateCaptcha();
    }
    if (isLockedOut) {
      const countdown = setInterval(() => {
        setLockoutTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdown);
            setIsLockedOut(false);
            setLoginAttempts(0);
            setLockoutTime(30);
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  }, [loginAttempts, isLockedOut]);

  const doLogin = async () => {
    if (!isRobotChecked) {
      setAlertMessage('Please confirm that you are not a robot.');
      setShowAlert(true);
      return;
    }

    if (loginAttempts >= 5) {
      setAlertMessage(`Too many failed attempts! Try again in ${lockoutTime} seconds.`);
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
      setAlertMessage(`Invalid credentials! Attempt ${loginAttempts + 1}/3`);
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '25%'
        }}>
          <IonAvatar style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden'
          }}>
            <IonIcon icon={logoIonic} color='primary' style={{ fontSize: '120px', color: '#6c757d' }} />
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
          <IonInput style={{ marginTop: '10px' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          {/* CAPTCHA Logic */}
          {loginAttempts >= 3 && (
            <div style={{ marginTop: '15px' }}>
              <p>{`What is ${captchaA} + ${captchaB}?`}</p>
              <IonInput
                type="number"
                placeholder="Enter CAPTCHA answer"
                onIonChange={(e) => {
                  if (parseInt(e.detail.value!) !== captchaResult) {
                    setAlertMessage('Incorrect CAPTCHA! Try again.');
                    setShowAlert(true);
                  }
                }}
              />
            </div>
          )}

          {/* "I'm not a robot" checkbox with a notification message */}
          <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
            <IonCheckbox
              checked={isRobotChecked}
              onIonChange={e => setIsRobotChecked(e.detail.checked)}
            />
            <IonLabel style={{ marginLeft: '8px' }}>Please verify that you are a human by checking the box above. This helps us prevent automated login attempts</IonLabel>
          </div>

          <IonButton
            onClick={doLogin}
            expand="full"
            shape="round"
            disabled={!isRobotChecked || isLockedOut}
            style={{ marginTop: '20px' }}
          >
            Login
          </IonButton>

          <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape="round" style={{ marginTop: '10px' }}>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
