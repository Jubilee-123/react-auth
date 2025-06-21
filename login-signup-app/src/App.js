import React, { useState } from 'react';

function AuthForm({ isLogin }) {
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', background: '#fff', borderRadius: 10 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input placeholder="Username" style={{ display: 'block', marginBottom: 10 }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: 10 }} />
      <button>{isLogin ? "Login" : "Sign Up"}</button>
    </div>
  );
}

export default function App() {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <div style={{ background: '#eee', height: '100vh', paddingTop: 100 }}>
      <AuthForm isLogin={loginMode} />
      <p style={{ textAlign: 'center' }}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button onClick={() => setLoginMode(!loginMode)} style={{ marginLeft: 8 }}>
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
