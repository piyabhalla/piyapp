'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !name) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, 'profiles'), {
        uid: user.uid,
        email: user.email,
        name: name,
      });

      alert('Signup successful!');
      window.location.href = '/feed';
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '1rem', color: '#4b0082' }}>📝 Sign Up</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: '100%',
          padding: '0.6rem',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '100%',
          padding: '0.6rem',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            paddingRight: '2.5rem',
          }}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0.8rem',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#6b7280',
            fontSize: '0.9rem',
          }}
        >
          {showPassword ? '🙈' : '👁'}
        </span>
      </div>

      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          marginBottom: '1rem',
        }}
      />

      <button
        onClick={handleSignup}
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '0.6rem',
          border: 'none',
          borderRadius: '6px',
          width: '100%',
          fontWeight: 'bold',
        }}
      >
        🎉 Sign Up
      </button>
    </div>
  );
}