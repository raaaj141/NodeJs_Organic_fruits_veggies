import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Loginadmin from './Loginadmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Loginadmin" element={<Loginadmin/>} />
      </Routes>
    </Router>
  );
};

export default App;
