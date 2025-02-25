import { 
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column', 
            gap: '30px', 
          }}
        >
          <div></div>
            <IonCardHeader>
              <IonCardTitle>Welcome to Ljs Coffee shop!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            We're thrilled to have you here. Whether you're in the mood for a cozy cappuccino, an energizing iced latte, or a freshly brewed cup of your favorite coffee, we’ve got just the thing for you. Our baristas are ready to craft the perfect drink just for you. Take a seat, relax, and let us serve you something special today!


            </IonCardContent>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
