import React from 'react';
import './App.css';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from 'components/Main/Main';
import Join from 'pages/Join/Join';
import Login from 'pages/Login/Login';


const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/join' element={<Join />}></Route>
            <Route path='/Login' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;