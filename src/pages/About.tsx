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
  IonAlert,
} from '@ionic/react';
import { useState } from 'react';
import {
  informationCircleOutline,
  logoFacebook,
  logoInstagram,
  logoYoutube,
} from 'ionicons/icons';

const About: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    setShowAlert(true);
    setEmail('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#4CAF50' }}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: '600', fontSize: '1.5rem', color: '#fff' }}>
            About
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#F9FBF9', padding: '20px' }}>
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
          <h2 className="fade-in" style={{ color: '#2E7D32', fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>
            Welcome to Brewtopia!
          </h2>
          <p style={{ color: '#81C784', fontSize: '1rem', marginTop: '10px' }}>
            Your cozy stop for delightful brews and crafted drinks.
          </p>

          <IonButton
            expand="block"
            style={{
              maxWidth: '300px',
              margin: '20px auto',
              borderRadius: '12px',
              backgroundColor: '#4CAF50',
              color: '#fff',
            }}
            href="/contact"
          >
            <IonIcon icon={informationCircleOutline} slot="start" />
            Learn More
          </IonButton>
        </div>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E8F5E9' }}>
            <IonCardTitle style={{ color: '#2E7D32' }}>Brewtopia Best Sellers</IonCardTitle>
            <IonCardSubtitle style={{ color: '#81C784' }}>
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
                    <IonLabel style={{ fontWeight: '500', color: '#2E7D32' }}>{item}</IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E8F5E9' }}>
            <IonCardTitle style={{ color: '#2E7D32' }}>Meet Our Baristas</IonCardTitle>
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
                      <h2 style={{ color: '#2E7D32' }}>{person.name}</h2>
                      <p style={{ color: '#81C784' }}>{person.role}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E8F5E9' }}>
            <IonCardTitle style={{ color: '#2E7D32' }}>Customer Love</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[{ name: 'Ella', text: 'The best coffee in town!' }, { name: 'Max', text: 'Always a warm vibe and great brews.' }].map(
                (review, i) => (
                  <IonItem key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <IonLabel>
                      <h3 style={{ color: '#2E7D32' }}>"{review.text}"</h3>
                      <p style={{ color: '#81C784' }}>- {review.name}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', padding: '10px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E8F5E9' }}>
            <IonCardTitle style={{ color: '#2E7D32' }}>Stay Updated</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked" style={{ color: '#2E7D32' }}>Email Address</IonLabel>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #81C784',
                  marginTop: '5px',
                }}
              />
            </IonItem>
            <IonButton
              expand="block"
              style={{
                marginTop: '15px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                borderRadius: '12px'
              }}
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

        {/* 🔽 LOCATION SECTION ADDED HERE 🔽 */}
        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#E8F5E9' }}>
            <IonCardTitle style={{ color: '#2E7D32' }}>Find Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <img
              src="https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
              alt="Brewtopia Location"
              style={{ width: '100%', borderRadius: '12px', marginBottom: '15px' }}
            />
            <IonText style={{ color: '#2E7D32', fontWeight: '500' }}>
              📍 123 Coffee Lane, Brewtown, BT 45678
            </IonText>
            <p style={{ color: '#81C784', marginTop: '10px' }}>
              Open daily from 7 AM to 9 PM. Drop by for your morning fix or a cozy evening cup!
            </p>
          </IonCardContent>
        </IonCard>

        {/* SOCIAL MEDIA */}
        <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '30px' }}>
          <IonText style={{ color: '#81C784', fontSize: '1rem' }}>Connect with us:</IonText>
          <div style={{ marginTop: '10px', fontSize: '1.8rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoFacebook} style={{ color: '#4CAF50' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoInstagram} style={{ color: '#66BB6A' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoYoutube} style={{ color: '#81C784' }} />
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
