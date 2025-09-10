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
        <IonToolbar style={{ backgroundColor: '#4A90E2' }}> {/* Soft Blue */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: '600', fontSize: '1.5rem', color: '#fff' }}>
            About
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#FFFFFF', padding: '20px' }}> {/* White Background */}
        <style>
          {`
            .card-hover {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border-radius: 16px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
          <h2 className="fade-in" style={{ color: '#4A90E2', fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>
            Welcome to Ionic React!
          </h2>
          <p style={{ color: '#333', fontSize: '1rem', marginTop: '10px' }}>
            Building modern, scalable, and beautiful mobile apps that power your digital journey.
          </p>

          <IonButton
            expand="block"
            style={{
              maxWidth: '300px',
              margin: '20px auto',
              borderRadius: '12px',
              backgroundColor: '#4A90E2',  /* Soft Blue */
              color: '#fff',
            }}
            href="/contact"
          >
            <IonIcon icon={informationCircleOutline} slot="start" />
            Learn More
          </IonButton>
        </div>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#4A90E2' }}> {/* Soft Blue */}
            <IonCardTitle style={{ color: '#fff' }}>Top Projects</IonCardTitle>
            <IonCardSubtitle style={{ color: '#4A90E2' }}>
              Explore app innovation.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {['JPOST – Sidequest – it35-lab', 'Enterprise – Appdev', 'Sia – IAS'].map(
                (item, index) => (
                  <IonItem key={index} lines="none" style={{ borderBottom: '1px solid #eee' }}>
                    <IonThumbnail slot="start">
                      <img
                        alt={item}
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        style={{ borderRadius: '8px' }}
                      />
                    </IonThumbnail>
                    <IonLabel style={{ fontWeight: '500', color: '#4A90E2' }}>
                      {item}
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#4A90E2' }}>
            <IonCardTitle style={{ color: '#fff' }}>Meet Our Developers</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[{ name: 'Lovelaine Joy Tasic', role: 'Frontend Engineer' }, { name: 'Rey Sinabianan', role: 'Full Stack Developer' }, { name: 'Kyle Remulta', role: 'UX Designer' }].map(
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
                      <h2 style={{ color: '#4A90E2' }}>{person.name}</h2>
                      <p style={{ color: '#4A90E2' }}>{person.role}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#4A90E2' }}>
            <IonCardTitle style={{ color: '#fff' }}>Client Testimonials</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[{ name: 'LJ', text: 'Great mobile apps are built with great frameworks like Ionic' }, { name: 'Rey', text: 'Ionic makes cross-platform development feel native, without the complexity' }].map(
                (review, i) => (
                  <IonItem key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <IonLabel>
                      <h3 style={{ color: '#4A90E2' }}>"{review.text}"</h3>
                      <p style={{ color: '#4A90E2' }}>- {review.name}</p>
                    </IonLabel>
                  </IonItem>
                )
              )}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', padding: '10px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#4A90E2' }}>
            <IonCardTitle style={{ color: '#fff' }}>Subscribe to Updates</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked" style={{ color: '#4A90E2' }}>Email Address</IonLabel>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #4A90E2',
                  marginTop: '5px',
                }}
              />
            </IonItem>
            <IonButton
              expand="block"
              style={{
                marginTop: '15px',
                backgroundColor: '#4A90E2',
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
              message="Thanks for subscribing to updates!"
              buttons={['OK']}
            />
          </IonCardContent>
        </IonCard>

        <IonCard className="card-hover" style={{ marginTop: '30px', backgroundColor: '#FFFFFF' }}>
          <IonCardHeader style={{ backgroundColor: '#4A90E2' }}>
            <IonCardTitle style={{ color: '#fff' }}>Our Office</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <img
              src="https://i.pinimg.com/736x/e0/70/a0/e070a0fe5560532153a7bb51dd53a685.jpg"
              alt="Office Location"
              style={{ width: '100%', borderRadius: '12px', marginBottom: '15px' }}
            />
            <IonText style={{ color: '#4A90E2', fontWeight: '500' }}>
              📍 Manolo Fortich, Bukidnon.
            </IonText>
            <p style={{ color: '#4A90E2', marginTop: '10px' }}>
               Designed with 💙 in Bukidnon, PH!
            </p>
          </IonCardContent>
        </IonCard>

        <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '30px' }}>
          <IonText style={{ color: '#4A90E2', fontSize: '1rem' }}>Connect with us:</IonText>
          <div style={{ marginTop: '10px', fontSize: '1.8rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoFacebook} style={{ color: '#4A90E2' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoInstagram} style={{ color: '#4A90E2' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoYoutube} style={{ color: '#4A90E2' }} />
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
