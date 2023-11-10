import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services type='all'/>}/>
          <Route path='/service' element={<ServiceDetail/>}>
            <Route path=':itemId' element={<ServiceDetail/>}/> 
          </Route>
          <Route path='services/all' element={<Services type='all'/>}/>
          <Route path='services/goidau' element={<Services type='goidau'/>}/>
          <Route path='services/chamsocda' element={<Services type='chamsocda'/>}/>
          <Route path='services/nails' element={<Services type='nails'/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
