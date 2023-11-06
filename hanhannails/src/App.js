import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
