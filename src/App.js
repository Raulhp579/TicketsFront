import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeatSelection from './pages/SeatSelection';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asientos/:matchId" element={<SeatSelection />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

