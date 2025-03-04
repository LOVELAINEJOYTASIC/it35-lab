import { 
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
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
            padding: '20px', 
          }}
        >
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Brewtopia</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonThumbnail slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonThumbnail>
                  <IonLabel>Spanish latte</IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonThumbnail>
                  <IonLabel>Matcha coffee</IonLabel>
                </IonItem>
                <IonItem>
            <IonThumbnail slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonThumbnail>
            <IonLabel>Strawberry milk shake</IonLabel>
          </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
