// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import SignUp from './Auth/SignUp.js';
// import LogIn from './Auth/LogIn.js';
// import { Dashboard } from './Auth/Dashboard';
// import UserDashboard from './Auth/UserDashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className='App'>
//         <Routes>
//           <Route path = 'login' element={<LogIn />} />
//           <Route path = 'signup' element={<SignUp />} />
//           <Route path = 'dashboard' element={<Dashboard />} />
//           <Route path = 'userdashboard' element={<UserDashboard />} />
//           <Route path = '' element={<LogIn />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
    
//   );
// }
// export default App;


import React, { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const toggleLoginState = () => {
    setLoggedIn(!isLoggedIn);
  };

  const toggleIsAdmin = () => {
    setAdmin(!isAdmin);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? (
        <div>
          <p>welcome user</p>
          {isAdmin ? (
            <p>you have admin access</p>
          ) : (
            <p>you dont have admin access</p>
          )}
        </div>
      ) : (
        <p>please login to access content</p>
      )}
      <button onClick={toggleLoginState}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {isLoggedIn && (
        <button onClick={toggleIsAdmin}>
          {isAdmin ? 'Revoke Admin' : 'Grant Admin'}
        </button>
      )}
    </div>
  );
}

export default App;
