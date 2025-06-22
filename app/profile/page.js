'use client';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const q = query(collection(db, 'profiles'), where('email', '==', user.email));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          setName(data.name || '');
          setBio(data.bio || '');
          setDob(data.dob || '');
          setGender(data.gender || '');
          setAvatarUrl(data.avatar || '');
        }
      }
    });

    return () => unsub();
  }, []);

  const handleSave = async () => {
    if (!user) return;

    let uploadedUrl = avatarUrl;

    if (avatar) {
      const formData = new FormData();
      formData.append('file', avatar);
      formData.append('upload_preset', 'piyapppp'); // your Cloudinary preset

      const response = await fetch('https://api.cloudinary.com/v1_1/dgbxc4vhg/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      uploadedUrl = data.secure_url;
    }

    const profileRef = doc(db, 'profiles', user.uid);
    await setDoc(profileRef, {
      email: user.email,
      name,
      bio,
      dob,
      gender,
      avatar: uploadedUrl,
    });

    setAvatarUrl(uploadedUrl);
    setMessage('✅ Profile saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#4b0082', marginBottom: '1rem' }}>🧑‍💻 Edit Your Profile</h2>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        style={inputStyle}
      />

      <label>Short Bio:</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Tell us about yourself..."
        rows="3"
        style={{ ...inputStyle, resize: 'none' }}
      />

      <label>Profile Picture:</label>
      <div style={{ marginBottom: '1rem' }}>
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt="avatar"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ccc',
              marginBottom: '0.5rem',
            }}
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </div>

      <label>Gender:</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select</option>
        <option value="Female">♀ Female</option>
        <option value="Male">♂ Male</option>
        <option value="Other">⚧ Other</option>
        <option value="Prefer not to say">🔒 Prefer not to say</option>
      </select>

      <label>Date of Birth:</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: '1rem',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          padding: '0.6rem 1.2rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        💾 Save Profile
      </button>

      {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.6rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: '#fff',
  color: '#111',
};