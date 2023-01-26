import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import NewAuthor from './components/NewAuthor';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite authors</h1>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/authors' replace />} />
        <Route path='/authors' element={<AllAuthors />} />
        <Route path='/author/new' element={<NewAuthor />} />
        <Route path='/author/edit/:id' element={<EditAuthor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
