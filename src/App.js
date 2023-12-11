import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import ItemAdd from './pages/ItemAdd';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ItemPage />} />
        <Route path="/add" element={<ItemAdd />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;