import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import HomestayList from './pages/Homestay/HomestayList';
import HomestayDetail from './pages/Homestay/HomestayDetail';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homestays" element={<HomestayList />} />
            <Route path="/homestay/:id" element={<HomestayDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;