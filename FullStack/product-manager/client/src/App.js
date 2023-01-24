import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import NewProduct from './components/NewProduct'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/product' replace />} />
        <Route path='/product/new' element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
