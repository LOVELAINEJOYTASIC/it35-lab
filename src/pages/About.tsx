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
  IonIcon 
} from '@ionic/react';
import { informationCircleOutline, logoFacebook, logoYoutube } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#0074D9' }}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontWeight: '600', fontSize: '1.5rem' }}>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
     
        <div style={{ textAlign: 'center', paddingTop: '30px' }}>
          <h2 style={{ color: '#333', fontSize: '2rem', fontWeight: '600' }}>
            Welcome to Our App
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '600px', margin: '20px auto' }}>
            Our app provides an innovative solution to help you manage tasks efficiently. We focus on user experience and aim to provide a seamless platform for all users. Whether you're managing personal or professional tasks, our app is designed to make your life easier.
          </p>

          <IonButton
            color="primary"
            expand="full"
            style={{ maxWidth: '300px', marginTop: '20px' }}
            href="/contact"
          >
            <IonIcon icon={informationCircleOutline} style={{ marginRight: '8px' }} />
            Learn More
          </IonButton>
        </div>

       
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Follow Us</h3>

          <div style={{ marginTop: '20px' }}>
          
            <IonButton 
              href="https://www.facebook.com/your-page" 
              target="_blank" 
              style={{ marginRight: '15px', backgroundColor: '#4267B2' }}
              shape="round"
            >
              <IonIcon icon={logoFacebook} style={{ fontSize: '1.5rem', color: 'white' }} />
            </IonButton>

          
            <IonButton 
              href="https://www.youtube.com/your-channel" 
              target="_blank" 
              style={{ backgroundColor: '#FF0000' }}
              shape="round"
            >
              <IonIcon icon={logoYoutube} style={{ fontSize: '1.5rem', color: 'white' }} />
            </IonButton>
          </div>
        </div>

      
        <div style={{
          textAlign: 'center', 
          marginTop: '50px', 
          paddingTop: '30px', 
          borderTop: '1px solid #ccc'
        }}>
          <IonText style={{ color: '#777', fontSize: '1rem' }}>
            <p>&copy; 2025 Our App. All rights reserved.</p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
