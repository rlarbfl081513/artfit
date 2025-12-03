import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './index.css';
// import reportWebVitals from './reportWebVitals';

import MainPage from './page/MainPage';
import CustomLine from './page/CustomLine';
import CustomDot from './page/CustomDot';
import CustomBlob from './page/CustomBlob';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <div>
        <div className='BOX'>
          <div className='Text'>GENERATIVE ART</div>
          <div className='Text'>
            <Link to="/" className='logo'>
            <img className='logoImg' src='logo.png'></img>
            </Link>
          </div>
          <div className='Text'>HEALTH CARE</div>
        </div>
         
       </div>
     <Routes>
       <Route index element={<MainPage/>}/>
       <Route path="CustomLine" element={<CustomLine/>}/>
       <Route path="CustomDot" element={<CustomDot/>}/>
       <Route path="CustomBlob" element={<CustomBlob/>}/>
    </Routes>
   </BrowserRouter>
);

// reportWebVitals();

