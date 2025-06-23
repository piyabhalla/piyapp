'use client';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  doc,
  increment,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function FeedPage() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        let fetchedName = '';

        const q = query(collection(db, 'profiles'), where('email', '==', user.email));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          fetchedName = snapshot.docs[0].data().name;
        }

        setName(fetchedName || user.displayName || user.email || 'Anonymous');
      } else {
        setName('Anonymous');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const allPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sorted = allPosts.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds);
      setPosts(sorted);
    });

    return () => unsubscribe();
  }, []);

  const handlePost = async () => {
    if (!postText.trim() && !postImage) return;

    let imageUrl = '';

    if (postImage) {
      const formData = new FormData();
      formData.append('file', postImage);
      formData.append('upload_preset', 'piyapppp');

      const response = await fetch('https://api.cloudinary.com/v1_1/dgbxc4vhg/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      imageUrl = data.secure_url;
    }

    await addDoc(collection(db, 'posts'), {
      content: postText,
      claps: 0,
      timestamp: serverTimestamp(),
      user: name || 'Anonymous',
      image: imageUrl,
    });

    setPostText('');
    setPostImage(null);
  };

  const handleClap = async (id) => {
    const postRef = doc(db, 'posts', id);
    await updateDoc(postRef, {
      claps: increment(1),
    });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          🔒 Logout
        </button>

        <button
          onClick={() => (window.location.href = '/profile')}
          style={{
            backgroundColor: '#10b981',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          🙋‍♀ My Profile
        </button>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#4b0082' }}>✨ What’s on your mind?</h2>
      <textarea
        placeholder="Type something amazing..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        rows="4"
        cols="50"
        style={{
          width: '100%',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          color: '#111',
          backgroundColor: '#fff',
          marginTop: '0.5rem',
        }}
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPostImage(e.target.files[0])}
        style={{ marginTop: '1rem' }}
      />
      <br />
      <button
        onClick={handlePost}
        style={{
          marginTop: '1rem',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          padding: '0.6rem 1.4rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        🚀 Post
      </button>

      <hr style={{ margin: '2rem 0' }} />

      <h2 style={{ fontSize: '1.4rem', color: '#111' }}>📰 Recent Posts</h2>
      {posts.map((p) => (
        <div
          key={p.id}
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{p.content}</p>
          {p.image && (
            <img
              src={p.image}
              alt="post"
              style={{ marginTop: '1rem', width: '100%', borderRadius: '8px' }}
            />
          )}
          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            🕒 {p.timestamp?.seconds ? new Date(p.timestamp.seconds * 1000).toLocaleString() : 'Now'}
          </p>
          <button
            onClick={() => handleClap(p.id)}
            style={{
              marginTop: '0.6rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              padding: '0.4rem 0.9rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            👏 {p.claps || 0}
          </button>
        </div>
      ))}
    </div>
  );
}