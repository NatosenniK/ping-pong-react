import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnterScoresPage from './pages/EnterScoresPage';
import StandingsPage from './pages/StandingsPage';
import StatsPage from './pages/StatsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enter-scores" element={<EnterScoresPage />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;