import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SeatSelection from './pages/SeatSelection';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asientos/:matchId" element={<SeatSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
