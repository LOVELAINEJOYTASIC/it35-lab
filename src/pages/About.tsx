import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonToggle,
  IonAlert,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import {
  informationCircleOutline,
  logoFacebook,
  logoInstagram,
  logoYoutube,
} from 'ionicons/icons';

const About: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.body.classList.toggle('dark', newDarkMode);
  };

  const handleSubscribe = () => {
    setShowAlert(true);
    setEmail('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#AEDFF7' }}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: '600', fontSize: '1.5rem', color: '#fff' }}>
            About
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#F4F7FC', padding: '20px' }}>
        <style>
          {`
            .card-hover {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border-radius: 16px;
            }
            .card-hover:hover {
              transform: translateY(-5px) scale(1.02);
              box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
            }
            .fade-in {
              animation: fadeInUp 1s ease forwards;
              opacity: 0;
              transform: translateY(20px);
            }
            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div style={{ textAlign: 'center', paddingTop: '30px' }}>
          <h2
            className="fade-in"
            style={{
              color: '#5E7D8D',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '10px',
            }}
          >
            Welcome to Brewtopia!
          </h2>
          <p style={{ color: '#A0B9D3', fontSize: '1rem', marginTop: '10px' }}>
            Your cozy stop for delightful brews and crafted drinks.
          </p>

          <IonButton
            color="primary"
            expand="block"
            style={{
              maxWidth: '300px',
              margin: '20px auto',
              borderRadius: '12px',
              backgroundColor: '#4A90E2',
              color: '#fff',
            }}
            href="/contact"
          >
            <IonIcon icon={informationCircleOutline} slot="start" />
            Learn More
          </IonButton>
        </div>

        <IonCard className="card-hover" style={{ marginTop: '20px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E5F2FA' }}>
            <IonCardTitle style={{ color: '#5E7D8D' }}>Settings</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel style={{ color: '#5E7D8D' }}>Dark Mode</IonLabel>
              <IonToggle checked={darkMode} onIonChange={handleToggle} />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E5F2FA' }}>
            <IonCardTitle style={{ color: '#5E7D8D' }}>Brewtopia Best Sellers</IonCardTitle>
            <IonCardSubtitle style={{ color: '#A0B9D3' }}>
              Whether it’s a cozy cappuccino or a refreshing iced latte, we have something special for every taste.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {['Spanish Latte', 'Matcha Coffee', 'Strawberry Milk Shake', 'Caramel Iced Coffee'].map(
                (item, index) => (
                  <IonItem key={index} lines="none" style={{ borderBottom: '1px solid #eee' }}>
                    <IonThumbnail slot="start">
                      <img
                        alt={item}
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        style={{ borderRadius: '8px' }}
                      />
                    </IonThumbnail>
                    <IonLabel style={{ fontWeight: '500', color: '#5E7D8D' }}>{item}</IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E5F2FA' }}>
            <IonCardTitle style={{ color: '#5E7D8D' }}>Meet Our Baristas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[{ name: 'Mia', role: 'Latte Artist' }, { name: 'Jake', role: 'Brew Master' }, { name: 'Luna', role: 'Customer Experience' }].map(
                (person, i) => (
                  <IonItem key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <IonThumbnail slot="start">
                      <img
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        alt={person.name}
                        style={{ borderRadius: '50%' }}
                      />
                    </IonThumbnail>
                    <IonLabel>
                      <h2 style={{ color: '#5E7D8D' }}>{person.name}</h2>
                      <p style={{ color: '#A0B9D3' }}>{person.role}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E5F2FA' }}>
            <IonCardTitle style={{ color: '#5E7D8D' }}>Customer Love</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[{ name: 'Ella', text: 'The best coffee in town!' }, { name: 'Max', text: 'Always a warm vibe and great brews.' }].map(
                (review, i) => (
                  <IonItem key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <IonLabel>
                      <h3 style={{ color: '#5E7D8D' }}>"{review.text}"</h3>
                      <p style={{ color: '#A0B9D3' }}>- {review.name}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', padding: '10px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E5F2FA' }}>
            <IonCardTitle style={{ color: '#5E7D8D' }}>Stay Updated</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked" style={{ color: '#5E7D8D' }}>Email Address</IonLabel>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  marginTop: '5px',
                }}
              />
            </IonItem>
            <IonButton
              expand="block"
              style={{ marginTop: '15px', backgroundColor: '#4A90E2', color: '#fff', borderRadius: '12px' }}
              onClick={handleSubscribe}
            >
              Subscribe
            </IonButton>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header="Subscribed!"
              message="Thank you for subscribing to Brewtopia!"
              buttons={['OK']}
            />
          </IonCardContent>
        </IonCard>

        <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '30px' }}>
          <IonText style={{ color: '#A0B9D3', fontSize: '1rem' }}>Connect with us:</IonText>
          <div style={{ marginTop: '10px', fontSize: '1.8rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoFacebook} style={{ color: '#3b5998' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoInstagram} style={{ color: '#C13584' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoYoutube} style={{ color: '#FF0000' }} />
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
