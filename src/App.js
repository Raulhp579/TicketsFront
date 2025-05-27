import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SeatSelection from './pages/SeatSelection';
import Login from './pages/Login';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('userLogged') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <>
      {/* Mostrar Header solo si NO estamos en /login */}
      {location.pathname !== '/login' && isAuthenticated && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/asientos/:matchId"
          element={
            isAuthenticated ? <SeatSelection /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
