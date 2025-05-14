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
            { title: 'Ionic Framework', subtitle: 'Hybrid App Power', content: 'Build cross-platform apps using web tech!', color: 'primary' },
            { title: 'Capacitor', subtitle: 'Native Power, Web Simplicity', content: 'Access native features easily with JS.', color: 'secondary' },
            { title: 'Angular + Ionic', subtitle: 'Built to Scale', content: 'A perfect combo for enterprise-grade apps.', color: 'tertiary' },
            { title: 'React + Ionic', subtitle: 'Component-Based', content: 'Build modular UIs with React and Ionic.', color: 'dark' },
            { title: 'Live Reload', subtitle: 'Fast Development', content: 'Update code in real-time during development.', color: 'warning' },
            { title: 'App Store Ready', subtitle: 'One Codebase, Many Platforms', content: 'Deploy to iOS, Android, and Web!', color: 'danger' },
            { title: 'PWA Support', subtitle: 'Progressive Web Apps', content: 'Ionic makes it easy to build PWAs.', color: 'light' },
            { title: 'Theming', subtitle: 'Design with Variables', content: 'Customize your UI with CSS variables.', color: 'medium' },
            { title: 'Community Support', subtitle: 'Huge Developer Base', content: 'Thousands of plugins and active devs.', color: 'success' },
            { title: 'Ionic CLI', subtitle: 'Your Dev Companion', content: 'Powerful commands for scaffolding and building apps.', color: 'primary' },
            { title: 'Ionic Storage', subtitle: 'Persistent Data', content: 'Store data across sessions with ease.', color: 'secondary' },
            { title: 'Gesture Controller', subtitle: 'Touch & Swipe', content: 'Create custom gestures like a pro.', color: 'tertiary' },
            { title: 'Web Components', subtitle: 'Under the Hood', content: 'Ionic is built with powerful Web Components.', color: 'dark' },
            { title: 'Responsive Design', subtitle: 'Mobile First', content: 'Ionic uses CSS Grid & Flex for adaptive layouts.', color: 'warning' },
            { title: 'Native Plugins', subtitle: 'Extend Capabilities', content: 'Add geolocation, camera, haptics, and more.', color: 'danger' },
            { title: 'Skeleton Text', subtitle: 'Smooth Loading UX', content: 'Keep users happy while data loads.', color: 'light' },
            { title: 'Ionicons', subtitle: 'Iconic Design', content: 'Over 700 beautiful icons for your UI.', color: 'medium' },
            { title: 'Ionic Animations', subtitle: 'Delightful Motion', content: 'Create fluid UI transitions with ease.', color: 'success' },
            { title: 'Unit Testing', subtitle: 'Build with Confidence', content: 'Use Jest & testing libraries for stability.', color: 'primary' }
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
