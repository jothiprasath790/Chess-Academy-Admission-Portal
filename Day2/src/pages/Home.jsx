import React from 'react';
import { Link } from 'react-router-dom';

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

function Home() {
  return (
    <div style={centerContentStyle}>
      <h2>Welcome to Chess Academy</h2>
      <p>
        Explore the world of chess with our expert instructors and comprehensive courses.
      </p>
      {/* Additional text */}
      <p style={{ margin: '10px', fontSize: '18px' }}>
        Get ready to elevate your chess skills and join a community of passionate chess enthusiasts. Our academy stands as a beacon for chess enthusiasts, offering a world-class learning experience curated by expert instructors. Dive into the complexities of the game, unravel intricate strategies, and join a community passionate about mastering the art of chess.
      </p>
      <div>
        <img
          src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Chess Academy"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
      </div>
      {/* "Get Started" button with Link to the login page */}
      <Link to="/login" style={{ marginTop: '20px', textDecoration: 'none' }}>
        <button style={{ fontSize: '20px' }}>Get Started</button>
      </Link>
      {/* Add more sections/components as needed */}
    </div>
  );
}

export default Home;
