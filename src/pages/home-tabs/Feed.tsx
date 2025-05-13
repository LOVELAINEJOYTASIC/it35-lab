import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import FeedContainer from '../../components/feedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#1A1A1A' }}> 
          <IonButtons slot='start'>
            <IonMenuButton color="light" /> 
          </IonButtons>
          <IonTitle style={{ color: '#ffffff' }}>Feed</IonTitle> 
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FeedContainer />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
