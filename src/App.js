import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import './App.scss';

const App = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />

    </Routes>

  </Router>
);

export default App;
