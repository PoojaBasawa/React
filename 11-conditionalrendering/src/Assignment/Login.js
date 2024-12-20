import React, { useState } from 'react';

function Login() {
  // State hooks for form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the login logic here
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
