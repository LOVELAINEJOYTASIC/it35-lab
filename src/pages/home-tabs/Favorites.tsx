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
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Hover effect styles */}
        <style>
          {`
            .hover-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border-radius: 12px;
              cursor: pointer;
            }

            .hover-card:hover {
              transform: translateY(-8px) scale(1.02);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }

            @media (max-width: 768px) {
              .card-wrapper {
                flex-direction: column;
                align-items: center;
              }

              .hover-card {
                width: 90% !important;
              }
            }
          `}
        </style>

        <div
          className="card-wrapper"
          style={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px'
          }}
        >
          {[
            {
              title: 'Matcha Coffee',
              subtitle: 'Green tea + espresso',
              content: 'Earthy and creamy',
              color: 'primary'
            },
            {
              title: 'Spanish Latte',
              subtitle: 'Rich espresso blend',
              content: 'Sweet & smooth',
              color: 'secondary'
            },
            {
              title: 'Macchiato Coffee',
              subtitle: 'Espresso with foam',
              content: 'Balanced intensity',
              color: 'tertiary'
            },
            {
              title: 'Black Coffee',
              subtitle: 'Pure & bold',
              content: 'No milk, just magic',
              color: 'dark'
            },
            {
              title: 'Mocha Iced Coffee',
              subtitle: 'Chocolate & espresso',
              content: 'Cool and chocolaty',
              color: 'warning'
            },
            {
              title: 'Red Velvet Coffee',
              subtitle: 'Unique twist',
              content: 'Vibrant and rich',
              color: 'danger'
            },
            {
              title: 'Cinnamon Iced Coffee',
              subtitle: 'Spiced treat',
              content: 'Perfectly refreshing',
              color: 'light'
            },
            {
              title: 'Flat White',
              subtitle: 'Smooth microfoam',
              content: 'Espresso-forward',
              color: 'medium'
            },
            {
              title: 'Caramel Iced Coffee',
              subtitle: 'Sweet & bold',
              content: 'Fan favorite',
              color: 'dark'
            }
          ].map((card, index) => (
            <IonCard
              key={index}
              className="hover-card"
              style={{ width: '30%', minWidth: '250px' }}
              color={card.color as any}
            >
              <IonCardHeader>
                <IonCardTitle>{card.title}</IonCardTitle>
                <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>{card.content}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
