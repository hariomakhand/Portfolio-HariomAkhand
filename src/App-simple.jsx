import React from 'react'

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0f172a', 
      color: 'white', 
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Hariom Akhand
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Full Stack Developer
      </p>
      <div style={{ 
        display: 'flex', 
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <a 
          href="https://github.com/hariomakhand" 
          target="_blank"
          style={{
            padding: '10px 20px',
            background: '#1e293b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            border: '1px solid #334155'
          }}
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/hariom-akhand" 
          target="_blank"
          style={{
            padding: '10px 20px',
            background: '#0ea5e9',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}
        >
          LinkedIn
        </a>
      </div>
      <p style={{ marginTop: '2rem', opacity: 0.7 }}>
        📧 hariomakhand82@gmail.com | 📱 +91 6267318849
      </p>
    </div>
  )
}