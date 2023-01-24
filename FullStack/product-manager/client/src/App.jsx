import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import NewProduct from './components/NewProduct'
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/product' replace />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/product/new' element={<NewProduct />} />
        <Route path='/products/:id' element={<OneProduct />} />
        <Route path='/form/display' element={<><NewProduct /><AllProducts /></>} />
      </Routes>
    </div>
  );
}

export default App;
