// src/pages/LoginPage.jsx
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (username) => {
    // Handle login logic, e.g., redirect to dashboard
    console.log(`Redirecting to dashboard for user: ${username}`);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
