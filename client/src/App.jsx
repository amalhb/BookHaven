import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInterface from './components/sidebar/userinterface';


const App = () => {
  

  return (
    <Router>
      <UserInterface /> {/* side bar  */}
    </Router>
  );
};

export default App;
