import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Conditionpage from './ConditionPage';

function Frontpage() {
  // useState to manage whether the page is showing Login or Logout
  const [isPageActive, setIsPageActive] = useState(null); // Initially set to null

  // Toggle between Login and Logout
  const handleButtonClick = (page) => {
    setIsPageActive(page);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '20px',
        
      }}
    >
      {/* Show buttons */}
      <div>
        <button
          onClick={() => handleButtonClick('login')}
          style={{ backgroundColor: 'yellow', padding: '10px 20px', marginBottom: '10px', }}
        >
          Login Page
        </button>
        <button
          onClick={() => handleButtonClick('logout')}
          style={{ backgroundColor: 'orange', padding: '10px 20px',marginLeft:'10px' }}
        >
          Logout Page
        </button>
        <button
          onClick={() => handleButtonClick('null')}
          style={{ backgroundColor: 'blue', padding: '10px 20px' ,marginLeft:'10px'}}
        >
          Clear Page
        </button>
      </div>

      {/* Show Login or Logout page below buttons */}
      {isPageActive === 'login' && <Login />}
      {isPageActive === 'logout' && <Logout />}
      {isPageActive === 'null' && <Conditionpage/>}
    </div>
  );
}

export default Frontpage;
