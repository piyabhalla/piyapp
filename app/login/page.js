'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login successful!');
        window.location.href = '/feed';
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!resetEmail) {
      alert("Please enter your email to reset password");
      return;
    }

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert('Password reset email sent!');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '1rem', color: '#4b0082' }}>🔐 Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setResetEmail(e.target.value); // sync for forgot password
        }}
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

      <button
        onClick={handleLogin}
        style={{
          backgroundColor: '#8b5cf6',
          color: 'white',
          padding: '0.6rem',
          border: 'none',
          borderRadius: '6px',
          width: '100%',
          marginBottom: '1rem',
          fontWeight: 'bold',
        }}
      >
        🚀 Login
      </button>

      <p style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: '0.5rem' }}>
        Forgot password?{' '}
        <span
          onClick={handleForgotPassword}
          style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: '500' }}
        >
          Click here
        </span>
      </p>

      <p style={{ fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>
        New user?{' '}
        <a
          href="/signup"
          style={{
            color: '#8b5cf6',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Sign up here
        </a>
      </p>
    </div>
  );
}