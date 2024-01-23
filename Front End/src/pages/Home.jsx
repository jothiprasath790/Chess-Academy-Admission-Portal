import React from 'react';

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
      <div>
        <img
          src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Chess Academy"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
      </div>
      {/* Add more sections/components as needed */}
    </div>
  );
}

export default Home;
