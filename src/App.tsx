import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import SecondPageComponent from './components/SecondPageComponent1';

import './styles/App.css';



const App = () => {
  const [user, setUser] = useState(localStorage.getItem("User"));

  const handleSaveUser = (userData:any) => {
    setUser(userData);
    localStorage.setItem("User",userData);
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/second-page" /> : <UserForm onSave={handleSaveUser} />} />
        <Route
          path="/second-page"
          element={user ? (
            <div>
              <SecondPageComponent />
            </div>
          ) : (
            <Navigate to="/" state={{ message: 'Please enter your details first.' }} />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
