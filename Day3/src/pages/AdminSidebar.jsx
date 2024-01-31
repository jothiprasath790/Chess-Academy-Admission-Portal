import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: isOpen ? '500px' : '50px', padding: '20px', transition: 'width 0.3s' }}>
      <MenuIcon onClick={toggleSidebar} style={{ cursor: 'pointer', marginBottom: '10px' }} />
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/academydetail">Admin Academy Detail</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/manageusers">Manage Users</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
