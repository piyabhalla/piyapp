'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user'); // Optional: check auth
    if (user) {
      router.push('/feed');
    }
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#4b0082' }}>
        👋 Welcome to Piyapp!
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
        A mini social app built with ❤
      </p>
      <button
        onClick={() => router.push('/login')}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
      >
        🔑 Login
      </button>
      <button
        onClick={() => router.push('/signup')}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#10b981',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        🆕 New User? Sign Up
      </button>
    </div>
  );
}