import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState(''); // Added role state
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // Role selection validation
    if (!role) {
      setErrorMessage('Please select a role (Admin/User)');
      return;
    }

    // Perform login logic here
    // For now, let's just show a success message
    setErrorMessage(`Login successful! Welcome, ${name} (${role})`);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>

        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </label>

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'green' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
