import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import React from 'react';
import logo from '../open-news-2017.png';
import './App.css';

import NewsPanel from '../NewsPanel/NewsPanel';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <NewsPanel />
        </div>
    </div>
  );
}

export default App;
