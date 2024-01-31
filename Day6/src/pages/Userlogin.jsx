import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password (add your validation logic here)

    // Redirect to the user page after form submission
    navigate('/user');
  };

  const handleCreateAccount = () => {
    // Redirect to the signin page
    navigate('/signin');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' }}>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p style={{ marginTop: '10px' }}>I dont have an account. <button onClick={handleCreateAccount}>Create account</button></p>
      </div>
    </div>
  );
};

export default Userlogin;
