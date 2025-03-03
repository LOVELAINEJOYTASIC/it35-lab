
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            marginTop: '25%',
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '20px', 
          }}
        >
          <IonCard style={{ width: '30%' }} color="primary">
            <IonCardHeader>
              <IonCardTitle>Matcha coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="secondary">
            <IonCardHeader>
              <IonCardTitle>Spanish latte</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="tertiary">
            <IonCardHeader>
              <IonCardTitle>Machiatto coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Strawberry milk shake</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="black">
            <IonCardHeader>
              <IonCardTitle>Black coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="warning">
            <IonCardHeader>
              <IonCardTitle>Mocha Iced Coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="danger">
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="light">
            <IonCardHeader>
              <IonCardTitle>Cinnamon Iced Coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="medium">
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard style={{ width: '30%' }} color="dark">
            <IonCardHeader>
              <IonCardTitle>Caramel Iced Coffee</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;