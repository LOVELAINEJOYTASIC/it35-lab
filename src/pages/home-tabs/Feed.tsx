import { IonButton, IonInput, IonItem, IonLabel, IonList, IonTextarea, IonCard, IonCardContent } from '@ionic/react';
import { useState } from 'react';

const FeedContainer: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([newPost, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <IonItem lines="none">
        <IonLabel position="stacked">What's on your mind?</IonLabel>
        <IonTextarea
          placeholder="Write something..."
          value={newPost}
          onIonChange={(e) => setNewPost(e.detail.value!)}
        />
      </IonItem>

      <IonButton
        expand="block"
        style={{ backgroundColor: 'green', color: 'white', marginTop: '12px', borderRadius: '10px' }}
        onClick={handlePost}
      >
        Post
      </IonButton>

      <IonList style={{ marginTop: '20px' }}>
        {posts.map((post, index) => (
          <IonCard key={index}>
            <IonCardContent>{post}</IonCardContent>
          </IonCard>
        ))}
      </IonList>
    </div>
  );
};

export default FeedContainer;
