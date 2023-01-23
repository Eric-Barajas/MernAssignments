import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './views/NotFound';
import Wrapper from './views/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Luke API Walker</h1>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Wrapper />} />
        {/* If none of the above routes match, use NotFound View */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
