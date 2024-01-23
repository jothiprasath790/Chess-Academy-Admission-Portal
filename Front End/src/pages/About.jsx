import React, { useState } from 'react';

const About = () => {
  const [showTextOverlay1, setShowTextOverlay1] = useState(false);
  const [showTextOverlay2, setShowTextOverlay2] = useState(false);

  const handleImageHover1 = () => {
    setShowTextOverlay1(true);
  };

  const handleImageLeave1 = () => {
    setShowTextOverlay1(false);
  };

  const handleImageHover2 = () => {
    setShowTextOverlay2(true);
  };

  const handleImageLeave2 = () => {
    setShowTextOverlay2(false);
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <h2>About Chess Academy</h2>
        <p>
          Chess Academy is a leading institution committed to fostering a love for chess and providing
          top-notch education for players of all ages and skill levels.
        </p>
      </div>
      <div style={{ position: 'relative', maxWidth: '500px', margin: 'auto' }}>
        <img
          onMouseEnter={handleImageHover1}
          onMouseLeave={handleImageLeave1}
          src="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg"
          alt="About Chess Academy 1"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        {showTextOverlay1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            Chess Academy - Image 1
          </div>
        )}
      </div>
      <div style={{ position: 'relative', maxWidth: '500px', margin: '20px auto' }}>
        <img
          onMouseEnter={handleImageHover2}
          onMouseLeave={handleImageLeave2}
          src="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg"
          alt="About Chess Academy 2"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        {showTextOverlay2 && (
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            Chess Academy - Image 2
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
